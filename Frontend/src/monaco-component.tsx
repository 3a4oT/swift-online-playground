import * as React from 'react';

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

import { listen, MessageConnection } from 'vscode-ws-jsonrpc';
import { BaseLanguageClient, CloseAction, ErrorAction, createMonacoServices, createConnection } from 'monaco-languageclient';

import normalizeUrl = require('normalize-url');

const ReconnectingWebSocket = require('reconnecting-websocket');
require('monaco-editor/esm/vs/editor/editor.main');

export class MonacoComponent extends React.Component {
    private editorContainer: React.RefObject<HTMLDivElement>;
    public languageId = 'swift';

    private editor: monaco.editor.IStandaloneCodeEditor;

    constructor(props: {}) {
        super(props);
        this.editorContainer = React.createRef();
    }

    // public createUrl(): string {
    //     switch (this.languageId) {
    //         case 'swift':
    //             return 'ws://localhost:8080/lsp';
    //     }
    // }

    public createUrl(path: string): string {
        const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
        return normalizeUrl(`${protocol}://${location.host}${location.pathname}${path}`);
    }

    public createWebSocket(socketUrl: string): WebSocket {
        const socketOptions = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 10000,
            maxRetries: Infinity,
            debug: false,
        };
        return new ReconnectingWebSocket(socketUrl, undefined, socketOptions);
    }

    public createLanguageClient(connection: MessageConnection, services: BaseLanguageClient.IServices): BaseLanguageClient {
        return new BaseLanguageClient({
            name: `${this.languageId.toUpperCase()} Client`,
            clientOptions: {
                // use a language id as a document selector
                documentSelector: [this.languageId],
                // disable the default error handler
                errorHandler: {
                    error: () => ErrorAction.Continue,
                    closed: () => CloseAction.DoNotRestart,
                },
            },
            services,
            // create a language client connection from the JSON RPC connection on demand
            connectionProvider: {
                get: (errorHandler, closeHandler) => {
                    return Promise.resolve(createConnection(connection, errorHandler, closeHandler));
                },
            },
        });
    }

    componentDidMount() {
        const LANGUAGE_ID = 'swift';
        const MODEL_URI = 'inmemory://main.swift';
        const MONACO_URI = monaco.Uri.parse(MODEL_URI);

        // register the JSON language with Monaco
        monaco.languages.register({
            id: LANGUAGE_ID,
            extensions: ['.swift'],
            aliases: ['Swift', 'swift'],
            mimetypes: ['text/plain'],
        });

        // create the Monaco editor
        const value = `print("Hello World!!!")`;
        
        this.editor = monaco.editor.create(this.editorContainer.current, {
            model: monaco.editor.createModel(value, LANGUAGE_ID, MONACO_URI),
            glyphMargin: true,
            lightbulb: {
                enabled: true,
            },
            // theme: cucumberThemeId,
            // value: "function hello() {\n\talert('Hello world!');\n}",
            // language: this.languageId,
            autoIndent: true,
            // contextmenu: false,
            // automaticLayout: true,
            // minimap: { enabled: false },
            // renderLineHighlight: 'none',
            wordWrap: 'on',
            // scrollBeyondLastLine: false,
        });

        

        // create the web socket
        const url = this.createUrl('/lsp');
        const webSocket = this.createWebSocket(url);
        
        // listen when the web socket is opened
        const services = createMonacoServices(this.editor);
        listen({
            webSocket,
            onConnection: connection => {
                // create and start the language client
                const languageClient = this.createLanguageClient(connection, services);
                const disposable = languageClient.start();
                connection.onClose(() => disposable.dispose());
            },
        });
    }

    render() {
        return (
            <div
                ref={this.editorContainer}
                style={{
                    flex: 1,
                    height: '80vh',
                    border: '1px solid #ccc',
                }}
            />
        );
    }
}

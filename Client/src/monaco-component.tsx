import * as React from 'react';
import * as monaco from 'monaco-editor';

const ReconnectingWebSocket = require('reconnecting-websocket');
import { listen, MessageConnection } from 'vscode-ws-jsonrpc';

import {
  MonacoLanguageClient, CloseAction, ErrorAction,
  MonacoServices, createConnection
} from 'monaco-languageclient';

export class MonacoComponent extends React.Component {
    private editorContainer: React.RefObject<HTMLDivElement>;

    public languageId = 'json';

    constructor(props: {}) {
        super(props);
        this.editorContainer = React.createRef();
    }

    public createUrl(): string {
      switch (this.languageId) {
        case 'json':
          return 'ws://localhost:3000/sampleServer';
      }
    }
  
    // public createLanguageClient(connection: MessageConnection): MonacoLanguageClient  {
    //   return new MonacoLanguageClient ({
    //     name: `${this.languageId.toUpperCase()} Client`,
    //     clientOptions: {
    //       // use a language id as a document selector
    //       documentSelector: [this.languageId],
    //       // disable the default error handler
    //       errorHandler: {
    //         error: () => ErrorAction.Continue,
    //         closed: () => CloseAction.DoNotRestart
    //       }
    //     },
    //     // create a language client connection from the JSON RPC connection on demand
    //     connectionProvider: {
    //       get: (errorHandler, closeHandler) => {
    //         return Promise.resolve(createConnection(connection, errorHandler, closeHandler));
    //       }
    //     }
    //   });
    // }
  
    public createWebSocket(socketUrl: string): WebSocket {
      const socketOptions = {
        maxReconnectionDelay: 10000,
        minReconnectionDelay: 1000,
        reconnectionDelayGrowFactor: 1.3,
        connectionTimeout: 10000,
        maxRetries: Infinity,
        debug: false
      };
      return new ReconnectingWebSocket(socketUrl, undefined, socketOptions);
    }

    componentDidMount() {
      const editor = monaco.editor.create(this.editorContainer.current, {
            // theme: cucumberThemeId,
            value: "function hello() {\n\talert('Hello world!');\n}",
            language: 'javascript',
            // autoIndent: true,
            // contextmenu: false,
            // automaticLayout: true,
            // minimap: { enabled: false },
            // renderLineHighlight: 'none',
            // wordWrap: 'on',
            // scrollBeyondLastLine: false,
        });

        // install Monaco language client services
MonacoServices.install(editor);

// create the web socket
// const url = this.createUrl();
// const webSocket = this.createWebSocket(url);
// listen({
//   webSocket,
//   onConnection: connection => {
//     // create and start the language client
//     // const languageClient = this.createLanguageClient(connection, services);
//     // const disposable = languageClient.start();
//     // connection.onClose(() => disposable.dispose());
//   }
// });

    }

    render() {
        return (
            <div
                ref={this.editorContainer}
                style={{
                    width: '800px',
                    height: '600px',
                    border: '1px solid #ccc',
                }}
            />
        );
    }
}
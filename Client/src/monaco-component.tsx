import * as React from 'react';
import * as monaco from 'monaco-editor';

export class MonacoComponent extends React.Component {
    private editorContainer: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.editorContainer = React.createRef();
    }

    componentDidMount() {
        monaco.editor.create(this.editorContainer.current, {
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

import AceEditor from "react-ace";
import useEditor from "../context/editorContext.js";
import { Resizable } from "re-resizable";
import '../App.css'
import { colorGradients } from "../utils/utils.js";
import { useState } from "react";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";

//languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-php";


function Editor() {
    const { editorLanguage, editorTheme, backgroundColor } = useEditor();
    const [editorValue, setEditorValue] = useState('')
    return (
        <>
            <Resizable 
                minHeight={540} 
                minWidth={510} 
                maxWidth={1000} 
                className='p-5' 
                style={{background: colorGradients[backgroundColor]}}
            >
            <AceEditor
                placeholder="Start Coding..."
                mode={editorLanguage}
                theme={editorTheme}
                wrapEnabled={true}
                name="UNIQUE_ID_OF_DIV"
                fontSize={16}
                showPrintMargin={false}
                showGutter={true}   
                highlightActiveLine={false}
                editorProps={{ $blockScrolling: true }}
                value={editorValue}
                onChange={(code) => setEditorValue(code)}
                className="editor-container"
            />
            </Resizable>
        </>    
  )
}

export default Editor
import { useContext, createContext } from "react";

const EditorContext = createContext({
    editorTheme: 'monokai',
    editorLanguage: 'javascript',
    backgroundColor: '',
    updateEditorTheme: () => {},
    updateEditorLanguage: () => {},
    updateBackgroundColor: () => {}
});

export const EditorProvider = EditorContext.Provider;

export default function useEditor(){
    return useContext(EditorContext);
}
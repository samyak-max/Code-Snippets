import './App.css'
import { useRef, useState } from 'react'
import Editor from './components/editor.jsx';
import Settings from './components/Settings.jsx';
import { EditorProvider } from './context/editorContext.js';
import html2canvas from 'html2canvas';
import Footer from './components/Footer.jsx';

function App() {
  const [editorTheme, setEditorTheme] = useState('monokai')
  const [editorLanguage, setEditorLanguage] = useState('javascript')
  const [backgroundColor, setBackgroundColor] = useState('1')

  const updateEditorTheme = (editorTheme) => {
    setEditorTheme(editorTheme)
  }
  const updateEditorLanguage = (editorLanguage) => {
    setEditorLanguage(editorLanguage)
  }
  const updateBackgroundColor = (backgroundColor) => {
    setBackgroundColor(backgroundColor)
  }

  const editorRef = useRef(null);
  const downloadPng = async () => {
    const editorElement = editorRef.current
    if(editorElement) {
      const canvas = await html2canvas(editorElement)
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const link = document.createElement('a')
      link.download = "code_snippet.png";
      link.href = image;
      link.click();
    }
  }

  return (
    <>
      <EditorProvider value={{editorTheme, editorLanguage, backgroundColor, updateEditorTheme, updateEditorLanguage, updateBackgroundColor}}>
        <Settings downloadFunction={downloadPng}/>
        <div className='mt-[3rem]' ref={editorRef}>
          <Editor />
        </div>
        <Footer />
      </EditorProvider>
    </>
  );
}

export default App

import useEditor from '../context/editorContext.js';
import Dropdown from './Dropdown.jsx';
import { ArrowBigDownDash } from 'lucide-react';
import '../App.css'


function Settings({downloadFunction}) {
    const { updateEditorTheme, updateEditorLanguage, updateBackgroundColor } = useEditor(); 
    return (
    <>
        <div className='flex gap-4 justify-around w-[700px] items-center setting-container bg-[#191919] rounded border border-[#3C3C3C] text-sky-50'>
            <Dropdown  label='Language' options={["javascript", "c++", "python", "java", "html", "css", "typescript", "elixir", "php", "json"]} updateFunction={updateEditorLanguage}/>
            <Dropdown  label='Theme' options={["monokai","github","tomorrow","kuroir","twilight","xcode","textmate","solarized_dark","solarized_light","terminal"]} updateFunction={updateEditorTheme}/>
            <Dropdown  label='Background' options={["1","2","3","4","5"]} updateFunction={updateBackgroundColor}/>
            <button className='rounded-lg p-3 flex gap-2 border-2 border-sky-600 text-sky-600' onClick={downloadFunction}>
                <div>Download PNG</div>
                <ArrowBigDownDash />
            </button> 
        </div>
    </>
    )
}

export default Settings
import React, { useState } from "react";
import { Quill } from "react-quill";
import  Picker  from "@emoji-mart/react"; // Import the Picker component from emoji-mart
import "react-quill/dist/quill.snow.css"; // Ensure Quill styles are applied

const CustomUndo = () => ( //Undo custom function
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path className="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9" />
    </svg>
);

const CustomRedo = () => ( // Redo button icon component for Quill editor
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path className="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"/>
    </svg>
);

function undoChange() { // Undo function for Custom Toolbar
    this.quill.history.undo();
}
function redoChange() { // Redo function for Custom Toolbar
    this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["8pt", "10pt", "12pt", "14pt", "16pt", "18pt", "24pt", "36pt"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = ["arial", "sans-serif", "comic-sans", "courier-new", "georgia", "helvetica", "Inter", "lucida", "times-new-roman", "verdana", "tahoma"];
Quill.register(Font, true);


export const modules =(props) => ({  // Modules object for setting up the Quill editor
    toolbar: {
        container: "#" + props,
        handlers: {
            undo: undoChange,
            redo: redoChange,
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    },
});

// Formats objects for setting up the Quill editor
export const formats = ["header", "font", "size", "bold", "italic", "underline", "align", "strike", "script", "blockquote", 
    "background", "list", "bullet", "indent", "link", "emoji", "color", "code-block"];

export const QuillToolbar = ({ toolbarId, insertEmoji }) => {  // Quill Toolbar component

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    return  (
        <div className = "toolbar-main"> 
            {toolbarId !== undefined && 
                <div id={toolbarId}>
                    <span className="ql-formats">
                        <button className="ql-bold" />
                        <button className="ql-italic" />
                        <button className="ql-underline" />
                        <button className="ql-strike" />
                    </span>
                    <span className="ql-formats">
                        <select className="ql-font">
                            <option value="arial" > Arial </option>
                            <option value="sans-serif">Sans Serif</option>
                            <option value="comic-sans">Comic Sans</option>
                            <option value="courier-new">Courier New</option>
                            <option value="georgia">Georgia</option>
                            <option value="helvetica">Helvetica</option>
                            <option value="Inter" selected>Inter</option>
                            <option value="lucida">Lucida</option>
                            <option value="times-new-roman">Times New Roman</option>  
                            <option value="verdana">Verdana</option>                  
                            <option value="tahoma">Tahoma</option> 
                        </select>
                        <select className="ql-size">
                            <option value="8pt">8pt</option>
                            <option value="10pt">10pt</option>
                            <option value="12pt" selected>12pt</option>
                            <option value="14pt">14pt</option>
                            <option value="16pt">16pt</option>
                            <option value="18pt">18pt</option>
                            <option value="24pt">24pt</option>
                            <option value="36pt">36pt</option>
                        </select>
                        <select className="ql-header">
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                            <option value="4">Heading 4</option>
                            <option value="5">Heading 5</option>
                            <option value="6">Heading 6</option>
                            <option value="" selected>Normal</option>
                        </select>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-list" value="ordered" />
                        <button className="ql-list" value="bullet" />
                        <button className="ql-indent" value="-1" />
                        <button className="ql-indent" value="+1" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-script" value="super" />
                        <button className="ql-script" value="sub" />
                        <button className="ql-blockquote" />
                        <button className="ql-direction" />
                    </span>
                    <span className="ql-formats">
                        <select className="ql-align" />
                        <select className="ql-color" />
                        <select className="ql-background" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-emoji" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                    </span>
                    <span className="ql-formats">
                        <button className="ql-code-block" />
                    </span>
                    <span className="ql-formats">
                        <button className="ql-undo"> <CustomUndo /> </button>
                        <button className="ql-redo"> <CustomRedo /> </button>
                    </span>
                </div>
            }
            {showEmojiPicker && (
                <div id="emoji-picker" className = "emoji-picker-position">
                    <Picker onEmojiSelect={insertEmoji} />
                </div>
              )}
        </div>
    )
}

export default QuillToolbar;

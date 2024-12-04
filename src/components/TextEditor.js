import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, Grid } from "@mui/material";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({setPreviewContent}) => {
    const [content, setContent] = useState("");
    const quillRef = useRef(null); // Ref to access ReactQuill

    const handleContentChange = (value) => {
        setContent(value);
        setPreviewContent(value);
    }

    // Handler to insert emoji at the cursor position
    const insertEmoji = (emoji) => {
        const quill = quillRef.current.getEditor(); // Get Quill editor instance
        const cursorPosition = quill.getSelection()?.index || 0;
        quill.insertText(cursorPosition, emoji.native); // Insert emoji at cursor position
        quill.setSelection(cursorPosition + emoji.native.length); // Move cursor after the emoji
    };

    return (
        <Box className = "toolbar-main">
            <Box className="editor-container">
                <EditorToolbar toolbarId={'t1'} insertEmoji={insertEmoji}/>
                <ReactQuill ref={quillRef} theme="snow" value={content} onChange={handleContentChange}
                    placeholder={"Write your content here..."} modules={modules('t1')} formats={formats}
                    className="editor" />
            </Box>
        </Box>
    )
}

export default TextEditor
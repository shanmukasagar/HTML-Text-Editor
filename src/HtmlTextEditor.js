import React, {useState} from 'react';
import TextEditor from './components/TextEditor';
import { Box, Grid } from "@mui/material";
import Preview from './components/Preview';

const HtmlTextEditor = () => {

    const [previewContent, setPreviewContent] = useState('');
    
    return (
        <Box className = "text-editor-main">
            <Box className = "title-style">HTML Text Editor</Box>
            <Box>
                <Grid container spacing = {3}>
                    <Grid item xs = {8}> 
                        <TextEditor setPreviewContent = {setPreviewContent}/>
                    </Grid>
                    <Grid item xs = {4}>
                        <Preview previewContent = {previewContent}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HtmlTextEditor
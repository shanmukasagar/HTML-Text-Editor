import React from 'react';
import {Box} from "@mui/material";

const Preview = ({previewContent}) => {
    return (
        <Box className = "preview-main">
            <Box className = "preview-title">Preview</Box>
            <Box className="quill">
                <div className="ql-container ql-snow no-border-content">
                    <div className="ql-editor no-padding-content">
                        <div className = "preview-content toolbar-main" dangerouslySetInnerHTML={{ __html: previewContent }} />
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Preview
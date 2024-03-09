import React, {useMemo, useRef, useState} from 'react';
import JoditEditor, {Jodit} from 'jodit-react';
import './App.css'

const App = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const buttons = [
        'bold', 'italic', 'underline', '|',
        'ul', 'ol', '|',
        'outdent', 'indent', '|',
        'align', '|',
        'fontsize',
        'brush',
        'paragraph', '|',
        'link', 'table', 'image', '|',
        'undo', 'redo', '|',
        'hr', '|'
    ]

    const config = {
        hotkeys: {
            redo: 'ctrl+z',
            undo: 'ctrl+y,ctrl+shift+z',
            indent: 'ctrl+]',
            outdent: 'ctrl+[',
            bold: 'ctrl+b',
            italic: 'ctrl+i',
            removeFormat: 'ctrl+shift+m',
            insertOrderedList: 'ctrl+shift+7',
            insertUnorderedList: 'ctrl+shift+8',
            openSearchDialog: 'ctrl+f',
            openReplaceDialog: 'ctrl+q'
        },
        uploader: {
            insertImageAsBase64URI: true
        },
        buttons: buttons,
        buttonsMD: buttons,
        buttonsSM: buttons,
        buttonsXS: buttons,
        removeButtons: ['brush', 'file'],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: true,
        toolbarSticky: true,
        style: {
            background: '#27272E',
            color: 'rgba(255,255,255,0.5)',
        },
        onBlur: handleBlur,
        onFocus: handleFocus,
        toolbarDisableStickyForMobile: true,
        processPasteFromWord: true,
        askBeforePasteFromWord: true,
        cleanHTML: {
            denyTags: {
                script: true
            }
        },
        controls: {
            fontsize: {
                list: Jodit.atom([8, 9, 10])
            }
        },
        fontsize: true,
        theme: 'dark'
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
                console.log(newContent)
            }}
        />
    );
};

export default App;
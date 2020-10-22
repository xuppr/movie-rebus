import React from 'react';
import '../styles/CharButton.css';

const CharButton: React.FC<{
    char: string;
    handleClick: (key: String) => void
    }> = (props) => {
        let res;
        if(props.char == ' ') {
            res = <div className='char-button char-button-space' onClick={() => props.handleClick(props.char)}>space</div>
        }else if(props.char == '⌫') {
            res = <div className='char-button char-button-delete' onClick={() => props.handleClick(props.char)}>{props.char}</div>
        }else if(props.char == '#'){
            res = <div className='char-button' onClick={() => props.handleClick('')}></div>
        }else{
            res = <div className='char-button' onClick={() => props.handleClick(props.char)}>{props.char}</div>
        }
        return res;
    };

export default CharButton;
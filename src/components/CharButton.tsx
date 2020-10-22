import React from 'react';
import '../styles/CharButton.css';

const CharButton: React.FC<{
    char: string;
    handleClick: (key: String) => void
    }> = (props) => {
        return (
            <div className='char-button' onClick={() => props.handleClick(props.char)}>{props.char}</div>
        );
    };

export default CharButton;
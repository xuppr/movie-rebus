import React from 'react';
import '../styles/CharButton.css';

const CharButton: React.FC<{
    char: string;
}> = (props) => {
    return (
        <div className='char-button'>{props.char}</div>
    );
};

export default CharButton;
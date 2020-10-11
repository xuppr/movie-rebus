import React from 'react';
import '../styles/CharButton';

const CharButton: React.FC<{
    char: string;
}> = (props) => {
    return (
        <div className='char-button'>{props.char}</div>
    );
};

export default CharButton;
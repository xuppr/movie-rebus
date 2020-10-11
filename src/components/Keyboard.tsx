import React from 'react';
import CharButton from './CharButton';
import '../styles/Keyboard.css';

const Keyboard: React.FC<{}> = (props) => {
    const chars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM'?!-";
    const keys = chars.split('').map((char, i) => <CharButton char={char} key={i}/>);

    return (
        <div className="keyboard">
            {keys}
        </div>
    );
}; 

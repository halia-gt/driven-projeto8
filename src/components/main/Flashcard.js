import React, { useState } from 'react';
import Question from './Question';
import Numbered from './Numbered';
import Answer from './Answer';
import Answered from './Answered';

export default function Flashcard({question, answer, index, icons, setIcons}) {
    const [state, setState] = useState('numbered');
    const [answered, setAnswered] = useState('');
    const [icon, setIcon] = useState('');

    switch (state) {
        case 'question':
            return (
                <Question question={question} setState={setState} />
            );
        case 'answer':  
            return (
                <Answer answer={answer} setAnswered={setAnswered} icons={icons} setIcons={setIcons} setIcon={setIcon} setState={setState} />
            );
        case 'answered':
            return (
                <Answered answered={answered} index={index} icon={icon} />
            )
        default:
            return (
                <Numbered index={index} setState={setState} />
            );
    }
}
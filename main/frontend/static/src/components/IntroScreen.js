import React from 'react';
import {
    Typography as Text
} from '@material-ui/core';

export default function IntroScreen({name, questions}) {
    const lengthOfQuestions = questions.length;
    return (
        <div className="introScreen">
            <Text variant="h4" component="h4">
                {name}
            </Text>
            <Text variant="h5" component="h5">
                {lengthOfQuestions} Questions!
            </Text>
        </div>
    );
}
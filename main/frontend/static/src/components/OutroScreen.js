import React from 'react';
import {
    Typography as Text
} from '@material-ui/core';

export default function OutroScreen({name, correctAnswers}) {
    return (
        <div className="outroScreen">
            <Text variant="h4" component="h4">
                Good job! You've completed {name}!
            </Text>
            <Text variant="h6" component="h6">
                You've got {correctAnswers.length} correct!
            </Text>
        </div>
    );
}
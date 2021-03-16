import React, { useEffect, useState } from 'react';
import {
    Typography as Text
} from '@material-ui/core';

export default function Quiz(props) {
    const [quiz, setQuiz] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: props.match.params.code
            })
        };
        fetch('/api/getQuiz', requestOptions).then(res => res.json()).then(data => {
            if (data.error) {
                setError(data.message);
            } else {
                setQuiz(data);
            }
        })
    }, [])

    return (
        <div className="quiz">
            {error === null ? console.log(quiz) & console.log(quiz.name) & (
                <div>
                    {quiz.name}
                </div>
            ) : (
                <h1>{error}</h1>
            )}
        </div>
    )
}
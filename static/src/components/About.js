import React, { useEffect } from 'react';
import { Typography as Text } from '@material-ui/core';

export default function About() {
    useEffect(() => {
        document.title = "About"
    }, []);

    return (
        <div className="about">
            <Text variant="h4" component="h4" gutterBottom>About Page</Text>
        </div>
    )
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(numAttempts - 1);
                        setProgress(true);
                    }}
                    disabled={progress || numAttempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgress(progress ? !progress : progress)}
                    disabled={!progress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(numAttempts + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <span>Attempts: {numAttempts}</span>
            </div>
        </div>
    );
}

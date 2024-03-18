import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Attempts: {numAttempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestAttempts(parseInt(event.target.value) || 0)
                    }
                />
                <Button
                    onClick={() =>
                        setNumAttempts(numAttempts + requestAttempts)
                    }
                >
                    gain
                </Button>
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts <= 0}
                >
                    use
                </Button>
            </Form.Group>
        </div>
    );
}

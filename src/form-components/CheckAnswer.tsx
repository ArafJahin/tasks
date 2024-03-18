import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    function updAns(e: React.ChangeEvent<HTMLInputElement>) {
        setAns(e.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h3>Check Answer</h3>
                </Form.Label>
                <Form.Control value={ans} onChange={updAns} />
                {ans === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}

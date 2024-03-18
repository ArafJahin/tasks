import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select
                    value={ans}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setAns(event.target.value);
                    }}
                >
                    {options.map((e: string) => (
                        <option key={e} value={e}>
                            {e}
                        </option>
                    ))}
                </Form.Select>
                {ans === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}

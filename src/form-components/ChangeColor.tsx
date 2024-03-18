import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Label>Colors: </Form.Label>
                {colors.map((c: string) => (
                    <Form.Check
                        type="radio"
                        inline
                        key={c}
                        label={c}
                        value={c}
                        checked={color === c}
                        onChange={() => setColor(c)}
                        style={{ backgroundColor: c }}
                    />
                ))}
                <div
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </div>
            </Form.Group>
        </div>
    );
}

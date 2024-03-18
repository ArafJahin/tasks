import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    inline
                    checked={edit}
                    onChange={() => setEdit(!edit)}
                />
                <Form.Check
                    type="checkbox"
                    inline
                    checked={student}
                    id="student"
                    label="student"
                    onChange={() => setStudent(!student)}
                    hidden={!edit}
                />
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                    hidden={!edit}
                />
                <h1>
                    {name} is {student ? "" : "not"} a student
                </h1>
            </Form.Group>
        </div>
    );
}

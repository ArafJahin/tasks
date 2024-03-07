import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showState, setShowing] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Button onClick={() => setShowing(!showState)}>
                    Reveal Answer
                </Button>
            </div>
            <div>{showState ? <span>42</span> : <span></span>}</div>
        </div>
    );
}

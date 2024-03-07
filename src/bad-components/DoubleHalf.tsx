import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface valChanger {
    value: number;
    setVal: (newValue: number) => void;
}

function Doubler(p: valChanger): JSX.Element {
    return <Button onClick={() => p.setVal(2 * p.value)}>Double</Button>;
}

function Halver(p: valChanger): JSX.Element {
    return <Button onClick={() => p.setVal(0.5 * p.value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setVal={setDhValue}></Doubler>
            <Halver value={dhValue} setVal={setDhValue}></Halver>
        </div>
    );
}

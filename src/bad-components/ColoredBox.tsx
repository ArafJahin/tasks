import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorProps {
    index: number;
    newIndex: (newind: number) => void;
}
function ChangeColor(p: colorProps): JSX.Element {
    return (
        <Button onClick={() => p.newIndex((1 + p.index) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview(p: colorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[p.index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    index={colorIndex}
                    newIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    index={colorIndex}
                    newIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}

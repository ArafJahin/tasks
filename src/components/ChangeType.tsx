import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    return (
        <div>
            <div>
                <Button
                    onClick={() =>
                        setType(
                            questionType === "short_answer_question"
                                ? "multiple_choice_question"
                                : "short_answer_question"
                        )
                    }
                >
                    Change Type
                </Button>
            </div>
            <div>
                {questionType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}

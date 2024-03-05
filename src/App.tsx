import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import pokemonImage from "./images/pokemonadv1.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Araf Jahin&#39;s Page.
                            Hello World!
                        </p>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="rfrColumn"></div>
                    </Col>
                    <Col>
                        <img
                            src={pokemonImage}
                            alt="Pokemon"
                            width={922 / 2}
                            height={866 / 2}
                        />
                        <hr></hr>
                        <div className="rfrColumn"></div>
                        <ul>
                            <li>
                                <p>Trainer 1. Green</p>
                            </li>
                            <li>
                                <p>Trainer 2. Red</p>
                            </li>
                            <li>
                                <p>Trainer 3. Blue</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;

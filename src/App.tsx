import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import pokemonImage from "./images/pokemonadv1.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
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
        </div>
    );
}

export default App;

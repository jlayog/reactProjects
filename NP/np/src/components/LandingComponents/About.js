import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const About = () => {
    const dialogue = [
        
    ];
    
    const [counter, setCounter] = useState(0);

    const grabQuote = () => {
        if(counter < dialogue.length-1) {
            setCounter(counter + 1);
        } else {
            setCounter(0);
        }
        var result = dialogue[counter];
        return result;
    }

    const srcString = 'Hi my name is Jerel.';

    const [{content, carriage}, setContent] = useState({content:'', carriage: 0})

    const typeWrite = () => {
        if(carriage === srcString.length) {
            return 
            const delay = setTimeout(() => {
            setContent({content: content+srcString[carriage], carriage: carriage+1})
            clearTimeout(delay)
            }, 100)
        } [content]}
    
    return(
        <section id="about">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="dialogue-box">
                            <p id="typewriter-line">{content}</p>
                            <div className="nextButton">
                                <Button>▼</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )   
}

export default About;
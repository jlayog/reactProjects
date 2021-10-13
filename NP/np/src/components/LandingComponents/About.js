import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { dialogue } from '../../datalist';


const About = () => {
    
    const [counter, setCounter] = useState(0);
    const [sentence, setSentence] = useState(dialogue[counter]);

    const grabQuote = () => {
        console.log('Clicked!');
        if (counter === dialogue.length-1) {
            setCounter(0);
            setSentence(dialogue[0]);
        } else {
            setSentence(dialogue[counter + 1]);
            setCounter((oldState) => oldState + 1);
        }
    };

    const srcString = 'Hi my name is Jerel.';

    const [{content, carriage}, setContent] = useState({content:'', carriage: 0})

    useEffect(() => {
        if(carriage === srcString.length)
        return 
        const delay = setTimeout(() => {
            setContent({content: content+srcString[carriage], carriage: carriage+1})
            clearTimeout(delay)
        }, 100)
    }, [content]) 
    
    return(
        <section id="about">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="dialogue-box">
                            <p className="typewriter-line" onClick={grabQuote}>{sentence}</p>
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
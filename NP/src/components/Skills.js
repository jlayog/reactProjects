import React from 'react';
import { skills } from '../datalist';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { IoHardwareChipSharp } from 'react-icons/io5'

const Skills = () => {
    return (
      <section id="skills">
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto" className="text-center skills-col-title">
                    <IoHardwareChipSharp className="ioChip"/>
                    <h2 className="section-title">
                        Skills &amp; Technologies
                     </h2>
                    <p>
                      Here are some technologies I have worked with.
                    </p>
                </Col>
            </Row>
            <Row>
                {skills.map((skill) => (
                    <Col md={6} sm={12} key={skill} className="skills-col">
                        <div className="skillbox">
                            <FaCheckCircle className="faCheck" />
                            <span className="title-font font-medium text-white">
                                {skill}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>    
        </Container>
      </section>
    )
  }

export default Skills;
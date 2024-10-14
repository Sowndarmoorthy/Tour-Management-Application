import React from 'react'


import "./comman_section.css"
import { Container, Row, Col } from 'reactstrap';


const CommanSection = ({title}) => {
  return (
    <section className="comman_section">
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommanSection
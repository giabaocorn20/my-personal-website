import { Col, Container, Row } from "react-bootstrap";
import { Heading } from '@chakra-ui/react'

export default function BlogHero() {
    return(
    <Container className="py-5 text-center">
        <Row className="">
            <Col>
                <Heading className="fw-light">My Project</Heading>
                <p className="lead text-muted">Hi, welcome to the project section. I will put most of my engineering, web or even j4f projects on here! Check it out! </p>
                <p>
                    <a></a>
                    <a></a>
                </p>
            </Col>
        </Row>
    </Container>)
}
//legacy
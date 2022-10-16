import { Col, Container, Row } from "react-bootstrap";

export default function BlogHero() {
    return(
    <Container className="py-5 text-center">
        <Row className="">
            <Col>
                <h1 className="fw-light">My Project</h1>
                <p className="lead text-muted">Hi, welcome to the project section. I will put most of my engineering, web or even j4f projects on here! Check it out! </p>
                <p>
                    <a></a>
                    <a></a>
                </p>
            </Col>
        </Row>
    </Container>)
}
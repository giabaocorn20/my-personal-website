import { Col, Container, Row } from "react-bootstrap";

export default function BlogHero() {
    return(
    <Container className="py-5 text-center">
        <Row className="">
            <Col>
                <h1 className="fw-light">My Blog</h1>
                <p className="lead text-muted">Hi, welcome to the blog section. I and will try to blog as many entries as possible. </p>
                <p>

                    <a></a>
                    <a></a>
                </p>
            </Col>
        </Row>
    </Container>)
}
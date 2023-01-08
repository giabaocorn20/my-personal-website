import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Post = ({ post }) => {
  return (
    
        <Card className="my-3" style={{ width: "16rem" }}>
          <Card.Body>
            <Card.Title>{post.frontmatter.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Posted on {post.frontmatter.date}
            </Card.Subtitle>
            <Card.Text>{post.frontmatter.excerpt}</Card.Text>
            <Card.Link href={`/blog/${post.slug}`}>Read More</Card.Link>
          </Card.Body>
        </Card>
  );
};

export default Post;
//legacy

import fs from "fs";
import path from "path"; //remember this
import matter from "gray-matter";
import { Fragment } from "react";
import Post from "../../components/Post";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogHero from "../../components/BlogHero";
import { Container } from "react-bootstrap";

const Blog = ({ posts }) => {
  return (
    <>
    <BlogHero />
    <Container className="mb-5">
    <Row xs= "auto" md="auto" className="g-6">
            {posts.map((post, index) => {
              return( 
              <Col key = {index} >
                <Post key = {index} post={post} />
              </Col> )
            })}
      </Row>
      </Container>  
      </>
  );
};

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    //convert using gray-matter -> rename to frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
    revalidate: 10
  };
}

export default Blog;

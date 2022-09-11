import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Fragment } from 'react'
import { Button, Container } from "react-bootstrap"
export default function PostPage({frontmatter: {title, date, cover_image}, slug, content}) {
    return (
        <Container>
            <h1 className='text-center my-3'> {title} </h1>
            <Button class="btn btn-outline-dark my-3" href = '/blog'>Go back</Button>
            <p className="small text-muted text-uppercase">Posted on {date}</p>
            <div className='body container text-justify-center'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </Container>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
//     files = ['django-crash-course.md',
//   'javascript-performance-tips.md',
//   'new-in-php-8.md',
//   'python-book-review.md',
//   'react-crash-course.md',
//   'tailwind-vs-bootstrap.md',
//   'writing-great-unit-tests.md'] array of strign
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      }, //replace the 'md' with nothing 
    }))

    // paths = [
    //     { params: { slug: 'django-crash-course' } },
    //     { params: { slug: 'javascript-performance-tips' } },
    //     { params: { slug: 'new-in-php-8' } },
    //     { params: { slug: 'python-book-review' } },
    //     { params: { slug: 'react-crash-course' } },
    //     { params: { slug: 'tailwind-vs-bootstrap' } },
    //     { params: { slug: 'writing-great-unit-tests' } }
    //   ]
  
    return {
      paths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    return {
      props: {
        frontmatter,
        slug,
        content,
      },
      revalidate: 10
    }
  }
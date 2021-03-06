import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h2>Blog Posts</h2>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li key={post.node.id} className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <FontAwesomeIcon icon={faClipboard} className={blogStyles.icon} size="3x" />
                <div>
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.date}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
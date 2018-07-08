import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

export default class IndexPage extends React.Component {

  renderProjectCard(project) {
    return (
      <Link to={project.fields.slug}>
        <div className="card column is-narrow project-card hvr-bob" id={project.id}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={project.frontmatter.thumbnail} alt="Thumbnail image" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media-content">
              <h1 className="title is-4">{project.frontmatter.title}</h1>
              <p className="subtitle is-6">{project.frontmatter.description}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="title-container">
              <span className="title-projects is-size-3">projects</span>
              <img className="title-image" src={logo} alt="logo" />
              <span className="title-blueprint is-size-3">blueprint</span>
            </div>
          </div>
          <div className="columns">
            {projects
              .map(({ node: project }) => (
                this.renderProjectCard(project)
              ))}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "project" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            thumbnail
            description
          }
        }
      }
    }
  }
`

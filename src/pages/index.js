import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
              <p className="title is-4">{project.frontmatter.title}</p>
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
    console.log(projects)
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
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

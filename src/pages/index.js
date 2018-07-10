import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Navbar from '../components/Navbar'
import logo from '../img/logo.png'

export default class IndexPage extends React.Component {

  renderProjectCard(project) {
    return (
      <Link to={project.fields.slug} key={project.id}>
        <div className="card column project-card is-narrow is-clipped hvr-bob">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={project.frontmatter.thumbnail} alt="Thumbnail image" />
            </figure>
          </div>

          <div className="card-content">
              <h1 className="title is-4 is-spaced">{project.frontmatter.title}</h1>
              <p className="subtitle is-6">{project.frontmatter.description}</p>
          </div>
        </div>
      </Link>
    )
  }

  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <div>
        <Navbar />
        <section className="section">
          <div className="columns is-mobile is-centered">
            <div className="column body-medium">
              {projects
                .map(({ node: project }) => (
                  this.renderProjectCard(project)
                ))}
            </div>
          </div>
        </section>
      </div>
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
      filter: { frontmatter: { templateKey: { eq: "project" } }}
      sort: { order: DESC, fields: [frontmatter___date] }
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

import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ProjectTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Project = ({ data }) => {
  const { markdownRemark: project } = data
  console.log(data)
  
  return (
    <ProjectTemplate
      title={project.frontmatter.title}
    />
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Project

export const projectQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        thumbnail
        description
        intro {
          blurb
          gif
        }
        features {
          image
          text
        }
      }
    }
  }
`

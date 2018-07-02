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
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {body}
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

  return (
    <ProjectTemplate
      title={project.frontmatter.title}
      body={project.frontmatter.body}
    />
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Project

export const aboutPageQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        thumbnail
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import Navbar from '../components/Navbar'
import { getScrollPercent } from '../helpers/scroll'

export const ProjectTemplate = ({
  title,
  thumbnail,
  description,
  intro,
  features,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Navbar />
      <div className="progress" />
      <section className="section columns is-mobile">
        <div className="column project-body">
          <h1 className="styled title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p>{description}</p>
        </div>
      </section>

      <section>
        <img className="project-image" src={intro.gif} />
        <div className="hero is-light">
          <div className="hero-body">
            <div className="project-intro has-text-centered">
              {intro.blurb}
            </div>
          </div>
        </div>
      </section>


      <section className="section columns is-mobile">
        <div className="column project-body">
          <h1>Features</h1>
          <div>
            {features.map((feature, i) => { return (
              <div key={`feature-${i}`} className="project-feature">
                {feature.name && (
                  <div className="project-feature-header">
                    <span className="project-feature-number">{i}</span>
                    <h2 className="project-feature-name">{feature.name}</h2>
                  </div>
                )}
                <img className="project-image" src={feature.image} />
                {feature.text}
              </div>
            )})}
          </div>

          <div>
            <PageContent content={content} />
          </div>
        </div>
      </section>

    </div>
  )
}

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    blurb: PropTypes.string.isRequired,
    gif: PropTypes.string,
  }),
  features: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string.isRequired,
  })),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

class Project extends React.Component {

  componentDidMount() {
    // let progress = document.querySelector('.progress')
    // document.addEventListener('scroll', () => {
    //   let scroll = getScrollPercent()
    //   progress.style.setProperty('--scroll', scroll + '%')
    // })
  }

  render() {
    const { markdownRemark: project } = this.props.data

    return (
      <ProjectTemplate
        title={project.frontmatter.title}
        thumbnail={project.frontmatter.thumbnail}
        description={project.frontmatter.description}
        intro={project.frontmatter.intro}
        features={project.frontmatter.features}
        content={project.html}
        contentComponent={HTMLContent}
      />
    )
  }
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
          name
          image
          text
        }
      }
    }
  }
`

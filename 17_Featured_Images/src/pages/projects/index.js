// import { Link } from 'gatsby';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './../../components/Layout';
import * as styles from './../../styles/project.module.css';
import {GatsbyImage, getImage} from "gatsby-plugin-image"

export default function Projects({ data }) {
    console.log(data);
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    return (
        <Layout >
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>My Projects &amp; Websites </h3>
                <div className={styles.projects}>{projects.map((project) => 
                    <Link to={"/porjects/"+project.frontmatter.slug} key={project.id}>
                        <div>
                            < GatsbyImage image={getImage(project.frontmatter.thumb)} alt="project icon" />
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                    </Link >
                 )}</div>
                <p>Contact me : {contact} </p>
            </div>
        </Layout>
    );
}

/* export page query 
---------------------*/

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark( sort: {fields: frontmatter___date, order: DESC }) {
                nodes {
                    frontmatter {
                        slug
                        stack
                        title
                        thumb {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    } 
                    id
                }
        }
    contact: site{
                siteMetadata{
                    contact
                }
    }
}
`



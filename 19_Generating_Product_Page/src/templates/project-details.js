import React from 'react'
import Layout from '../components/Layout';
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styles from './../styles/project-details.module.css';

function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h3>stack</h3> 
                <div className={styles.featured}>
                    {/* <GatsbyImage image="image" alt="alt" /> */}
                </div> 

                {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}

export default ProjectDetails;

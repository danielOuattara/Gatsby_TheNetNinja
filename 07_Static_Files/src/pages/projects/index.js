// import { Link } from 'gatsby';
import React from 'react';
import Layout from './../../components/Layout';
import * as styles from './../../styles/project.module.css';

export default function Frontends() {
    return (
        <Layout >
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                {/* <ul>
                    <Link to="/projects/backends">Backend | </Link>
                    <Link to="/projects/frontends">Frontend | </Link>
                    <Link to="/projects/databases">Database  </Link>
                </ul> */}
                <h3>My Projects & Websites </h3>
            </div>
        </Layout>
    );
}


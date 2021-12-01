// import { Link } from 'gatsby';
import React from 'react';
import Layout from './../../components/Layout';
import * as styles from './../../styles/project.module.css';

export default function Frontends() {
    return (
        <Layout >
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>My Projects &amp; Websites </h3>
            </div>
        </Layout>
    );
}


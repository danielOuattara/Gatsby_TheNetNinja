import { Link } from 'gatsby';
import React from 'react';
import Layout from './../../components/Layout';

export default function Frontends() {
    return (
        <Layout >
            <div>
                <h2>Root Of my Projects Directory</h2>
                <ul>
                    <Link to="/projects/backends">Backend | </Link>
                    <Link to="/projects/frontends">Frontend | </Link>
                    <Link to="/projects/databases">Database  </Link>
                </ul>
            </div>
        </Layout>
    );
}


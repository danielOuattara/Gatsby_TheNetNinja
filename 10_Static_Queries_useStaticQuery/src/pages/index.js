import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from "./../components/Layout";
import * as styles from './../styles/home.module.css';


export default function Home({data}) {
  console.log(data);
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>Fullstack Web Developer in France</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="banner.png" alt="site banner" style={{maxWidth:"100%"}} />
        <p>{ title} -- {description}</p>
      </section>
    </Layout>
  );
}


export const query = graphql `
query SiteInfoIndex {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
}
`

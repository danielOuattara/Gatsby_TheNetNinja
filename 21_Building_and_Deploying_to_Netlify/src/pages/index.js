import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from "./../components/Layout";
import * as styles from './../styles/home.module.css';
import {GatsbyImage, getImage} from "gatsby-plugin-image"


export default function Home({data}) {
  const { title, description } = data.site.siteMetadata;
  const image = getImage(data.file.childImageSharp);
  // console.log("image ===", image);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>Fullstack Web Developer in France</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={image}  alt="site banner"/>
        <p>{ title} -- {description}</p>
      </section>
    </Layout>
  );
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  },
  file(relativePath: { eq: "banner.png"}) {
    id
    childImageSharp {
      gatsbyImageData
    }
  }
}
`

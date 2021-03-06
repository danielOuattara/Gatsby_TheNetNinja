import React from "react";
import { Link } from 'gatsby';
import Layout from "./../components/Layout";
import * as styles from './../styles/home.module.css';


export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>Fullstack Web Developer in France</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  );
}

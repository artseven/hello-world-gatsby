import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="http://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  );
}
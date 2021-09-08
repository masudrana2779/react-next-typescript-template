import React from "react";
import type { NextPage } from 'next'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
      <Layout>
        <h1>Hello</h1>

          <p>
              Add your react component here as Child component.
          </p>
      </Layout>
  )
}

export default Home

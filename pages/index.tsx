import React from "react";
import type { NextPage } from 'next'
import Layout from "../components/Layout";
import HomePage from "../components/home/homePage";

const Home: NextPage = () => {
  return (
      <Layout>
        <HomePage />
      </Layout>
  )
}

export default Home

import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'
import { HomePage } from "../components/home/home-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage/>
  </Layout>
)

export default IndexPage

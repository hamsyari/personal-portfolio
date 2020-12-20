import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MainView from "../components/layout/main"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'

const ResumePage = () => (
  <Layout>
    <SEO title="Home" />
    <MainView page="Resume"/>
  </Layout>
)

export default ResumePage

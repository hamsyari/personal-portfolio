import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MainView from "../components/layout/main"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" description="An overview of my professional experience, education and skills."/>
    <MainView page="Resume"/>
  </Layout>
)

export default ResumePage

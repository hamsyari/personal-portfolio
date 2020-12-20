import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MainView from "../components/layout/main"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me"/>
    <MainView page="AboutMe"/>
  </Layout>
)

export default AboutMePage

import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MainView from "../components/layout/main"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact"/>
    <MainView page="Contact"/>
  </Layout>
)

export default ContactPage

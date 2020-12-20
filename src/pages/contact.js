import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MainView from "../components/layout/main"

import 'semantic-ui-css/semantic.min.css'
import '../styles/layout.scss'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Want to get in touch? I'd love to hear from you. Here's how you can contact me."/>
    <MainView page="Contact"/>
  </Layout>
)

export default ContactPage

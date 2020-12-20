import React from "react"

import Layout from "../components/layout/layout"
import MainView from "../components/layout/main"
import SEO from "../components/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MainView/>
  </Layout>
)

export default NotFoundPage

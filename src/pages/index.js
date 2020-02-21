import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Ad from "../components/Ad"
import Staff from "../components/Staff"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mechanic Shop" />
    <Hero />
    <Feature />
    <Ad />
    <Staff />
    <Contact />
  </Layout>
)

export default IndexPage

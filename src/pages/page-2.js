import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <br></br>
    <br></br>
    <h2 class="box">Happy Birthday Anita!!!  <span role="img" aria-label="Hearts emoji">
        💕
      </span></h2>



    <Link to="/" class="box">Back to home page</Link>
  </Layout>
)

export default SecondPage

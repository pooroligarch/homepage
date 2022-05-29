// Step 1: Import React
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          src='../images/violence.jpg'
          alt='violence is good' 
        />
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
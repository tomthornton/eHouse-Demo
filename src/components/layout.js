import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout

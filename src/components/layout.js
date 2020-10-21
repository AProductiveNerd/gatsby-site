import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import "./index.css"

const layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        {/* Google Analytics Tag */}

        {/* Fonts */}
        <script
          src="https://kit.fontawesome.com/df5ff3fd43.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <Header />
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0"
        nonce="shF5cmWA"
      ></script>
      {children}
      <Footer />
    </div>
  )
}

export default layout

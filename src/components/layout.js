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
        {/* CSS Styles */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=David+Libre:wght@500;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sansita+Swashed:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />

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

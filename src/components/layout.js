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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-172115128-2"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-172115128-2');
          `}
        </script>

        {/* Microsoft Clarity */}
        <script type="text/javascript">
          {`
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "3w00udr4mh");
          `}
        </script>
        {/* CSS Styles */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />

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

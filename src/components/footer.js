import React from "react"
export default () => {
  return (
    <div style={{ marginTop: "50px" }} className="footer">
      <div style={{ marginTop: "30px" }} className="row-cols-2">
        <div
          style={{
            textAlign: "center",
            padding: "0px",
            margin: "0px",
            border: "0px",
          }}
          className="flex-entry col col-xs-3 col-sm"
        >
          <h6 style={{ color: "white" }}>Contact Me</h6>
          <hr style={{ color: "white" }} />
          <a href="mailto:hi@aproductivenerd.com">
            <i class="fas fa-mail-bulk"> </i> Mail me
          </a>
          <br />
          <a href="https://twitter.com/SikandMr">
            <i class="fa fa-twitter" aria-hidden="true"></i> Twitter DM me
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "0px",
            margin: "0px",
            padding: "0px",
          }}
          className="flex-entry col col-xs-3 col-sm"
        >
          <h6 style={{ color: "white" }}>Contact Me</h6>
          <hr style={{ color: "white" }} />
          <a href="https://www.gatsbyjs.com">Made with ❤ and Gatsby</a>
          <br />
          <a href="https://github.com/AProductiveNerd/gatsby-site">
            Click here to visit the soruce code for this website
          </a>
        </div>
      </div>
    </div>
  )
}

import React from "react"
export default () => {
  return (
    <div style={{ marginTop: "50px" }} className="footer">
      <div style={{ marginTop: "30px" }} className="row-footer">
        <div
          style={{
            textAlign: "center",
          }}
          className="col-footer"
        >
          <h6 style={{ color: "white", paddingTop: "20px" }}>Contact Me</h6>
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
          }}
          className="col-footer"
        >
          <a style={{ paddingTop: "20px" }} href="https://www.gatsbyjs.com">
            Made with ❤ and Gatsby
          </a>
          <br />
          <a href="https://github.com/AProductiveNerd/gatsby-site">
            Click here to visit the soruce code for this website
          </a>
        </div>
      </div>
    </div>
  )
}

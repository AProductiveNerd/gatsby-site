import React from "react"
export default () => {
  return (
    <div style={{ marginTop: "50px" }} className="footer">
      <div style={{ marginTop: "30px" }} className="row-cols-2">
        <div style={{ textAlign: "center" }} className="col-sm-6">
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
        <div style={{ textAlign: "center" }} className="col-sm-6">
          <h6 style={{ color: "white" }}>Made with ❤ and <a href="https://www.gatsbyjs.com/">Gatsby</a> </h6>
          <hr style={{ color: "white" }} />
          <a href="mailto:hi@aproductivenerd.com">
            Check out the source code for this website in <a href="">this Github Repo</a>
          </a>
        </div>
      </div>
    </div>
  )
}

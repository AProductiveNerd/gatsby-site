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
      </div>
    </div>
  )
}

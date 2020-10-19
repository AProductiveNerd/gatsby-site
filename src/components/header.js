import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
    <div className="top-banner">
      <div className="container">
        <Navbar className="navbar">
          <Navbar.Brand className="navbar-brand" href="/">
            <span role="img" aria-labelledby="emoji">
              🏠
            </span>
            Home
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="nav-item nav-link" href="/about-me">
              <span role="img" aria-labelledby="emoji">
                👨‍🔬
              </span>
              About Me
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/newsletter">
              <span role="img" aria-labelledby="emoji">
                💌
              </span>
              Sunday Times Sunday
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/notes">
              <span role="img" aria-labelledby="emoji">
                📚
              </span>
              Notes
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/tags">
              <span role="img" aria-labelledby="emoji">
                🏷
              </span>
              Tags
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className="nav-link">
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-url="https://www.aproductivenerd.com/"
                data-lang="en"
                data-dnt="true"
                data-show-count="false"
              >
                <span className="share-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </Nav.Link>

            <Nav.Link className="nav-link">
              <div
                class="fb-share-button"
                data-href="https://aproductivenerd.com"
                data-layout="button"
                data-size="small"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faproductivenerd.com%2F&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  <iframe
                    title="facebook-share-button"
                    src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Faproductivenerd.com&layout=button&size=small&width=67&height=20&appId"
                    width="67"
                    height="20"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </a>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar>

        <h1 className="site-title">A Productive Nerd</h1>
        <h5
          className="site-sub-title"
          style={{ color: "rgba(255, 177, 59, 0.6)" }}
        >
          Nerd out about tools for thought, productivity and learning
        </h5>
      </div>
    </div>
  )
}

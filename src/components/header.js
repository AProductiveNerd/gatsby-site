import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
    return (
        <div className="top-banner">
            <div className="container">

                <Navbar className="navbar" collapseOnSelect expand="lg">
                    <Navbar.Brand className="navbar-brand" href="/"><span role="img" aria-labelledby="emoji">🏠</span> Home</Navbar.Brand>
                    <Navbar.Toggle style={{outline: "none"}} className="btn-animated" aria-controls="responsive-navbar-nav"><i id="button-thing" className="fas fa-arrow-circle-down"></i></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="nav-item nav-link" href="/about-me"><span role="img" aria-labelledby="emoji">👨‍🔬</span> About Me</Nav.Link>
                            <Nav.Link className="nav-item nav-link" href="/newsletter"><span role="img" aria-labelledby="emoji">💌</span> Sunday Times Sunday</Nav.Link>
                            <Nav.Link className="nav-item nav-link" href="/tags"><span role="img" aria-labelledby="emoji">🏷</span> Tags</Nav.Link>
                        </Nav>
                        
                        <Nav>
                            <Nav.Link className="nav-link" href="/">
                                <span className="share-icon"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                            </Nav.Link>
                            
                            <Nav.Link className="nav-link" href="/">
                                <span className="share-icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <h1 className="site-title">A Productive Nerd</h1>
                <h5 className="site-sub-title" style={{color: "rgba(255, 177, 59, 0.6)"}}>Nerd out about tools for thought, productivity and learning</h5>

            </div>
        </div>
    )
}
import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <section id="projects-screen">      {/* This id allows for quick navigation to this section from Navbar */}
                    <div className="col-12">
                        <h2 id="sectionTitle"> PROJECTS </h2>
                    </div>

                    <div className="container-fluid" id="projects-section">       {/* id's (like this one) or class's can be used to define design specs in CSS file, and "call" it in JS files  */}
                        
                        <div className="project-box">  
                            <div className="banner-img1"></div>
                            <h1 className="project-name">Login App</h1>
                            <p className="project-description">This dynamic React app displays the UI for a login form, using reactstrap and social media logins.</p>
                            <a className="btn btn-info proj-btn" href="https://github.com/codecaviette/login-app" role="button">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    
                        <div className="project-box">  
                            <div className="banner-img2"></div>
                            <h1 className="project-name">Nucampsite Project</h1>
                            <p className="project-description">Explore Nucamp Bootcamp's campsites, leave a rating, and submit your contact info!</p>
                            <a className="btn btn-info proj-btn" href="https://github.com/codecaviette/nucampsite" role="button">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    
                        <div className="project-box">  
                            <div className="banner-img3"></div>
                            <h1 className="project-name">Grocery List</h1>
                            <p className="project-description">Dynamic React app that creates an interactive grocery list. Add, remove and cross out items!</p>
                            <a className="btn btn-info proj-btn" href="https://github.com/codecaviette/grocery-list" role="button">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                            
                    </div>
                </section>    
            </div>
        )
    }
}

export default Projects;
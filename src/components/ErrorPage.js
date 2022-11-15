import React, { Component } from "react";



class ErrorPage extends Component {



  render() {
    

    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}
        <div className="jobsApply__section">
          <h3 className="jobsApply__section-heading">{this.props.title}</h3>
          <main className="jobsApply__container flex-grow">
            <div className="error-page">
                <div className="container">
                <h1 className="first-four">4</h1>
                <div className="cog-wheel1">
                    <div className="cog1">
                        <div className="top"></div>
                        <div className="down"></div>
                        <div className="left-top"></div>
                        <div className="left-down"></div>
                        <div className="right-top"></div>
                        <div className="right-down"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
                
                <div className="cog-wheel2"> 
                    <div className="cog2">
                        <div className="top"></div>
                        <div className="down"></div>
                        <div className="left-top"></div>
                        <div className="left-down"></div>
                        <div className="right-top"></div>
                        <div className="right-down"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
                <h1 className="second-four">4</h1>
                <p className="wrong-para">Uh Oh! Page not found!</p>
                </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default ErrorPage;

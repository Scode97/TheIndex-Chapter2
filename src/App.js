import React, { Component } from "react";


import Sidebar from "./navBar";

import AuthorList from "./AuthorList";




class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>
              
                <AuthorList/>  

             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

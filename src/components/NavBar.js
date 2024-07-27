// import { useState } from "react";
import React,{Component} from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export class NavBar extends Component{
    

 
    render(){
        return(
            <div>
                 {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle text-dark"> */}
                 <nav className="navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" href="https://www.news18.com/"  style={{fontWeight:"bolder"}}>JS-News📰</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
    <div className="collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href=" ">Home</Link>
        </li> */}
       <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li> 
       <li className="nav-item"><Link className="nav-link" to="/Entertainment ">Entertainment</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/General ">General</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/health"> Health</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/sports"> Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology"> Technology</Link></li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onClick={this.clickSearch}>Search</button> */}
      </form>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default NavBar;

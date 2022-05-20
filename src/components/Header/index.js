import React from "react";
import TopMenu from "../TopMenu"
import "./_header.scss"

const Header=()=>(
  <>
    <header className="header">
    <div className="container-fluid">
    <div className="row">
    <div className="col-xs-3 col-lg-2">
      <div className="header_logo">
        <font>eStore</font>
        </div>
       </div>
         <div className="col-xl-6 col-lg-7 search">
          <div className="input-group">
            <div className="input-group-prepend">
              <select className="form control btn btn-success dropdown-toggler">
                <option>All</option>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <input type="text" className="form-control" />
          
          <div className="input-group-append">
            <button className="btn btn-success">
              <i className="fa fa-search"></i>
            </button>
            </div> 
          </div>
          </div>

          <div className="col-lg-3">        
                  <div className="header_right">
                        <div className="auth">
                          <a href="#">Sign-In</a>
                          <a href="#">Sign-Up</a>
                        </div>
                        <ul className="widget">
                          <li><i className="fa fa-heart"></i></li>
                          <li><i className="fa fa-shopping-cart"></i></li>
                        </ul>
                   </div>
                   
              </div>
          </div>
    </div>
  </header>
  <TopMenu/>
  </>
  
)

export default Header;
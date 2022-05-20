import React from "react";
import "../TopMenu/_topmenu.scss"
const menu=['Home','Men','Women','Kids','BestSeller'];
const TopMenu=()=>(
    <>
    <header className="menuHeader">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <nav className="menu">
                        <ul>
                            {menu.map((item,index)=>(
                              <li key={index}>
                              <a href="#">{item}</a>
                              </li>
                            )
                            )}
                        
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    
    </>
)

export default TopMenu;
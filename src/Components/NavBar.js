import React from "react"
import logo from "../Assets/Cojon.png"
import {Col, Divider, Row} from "antd"
import { Outlet, Link } from "react-router-dom";
export default function Header({silly}){
    return(
    <>  
        

            <div className="nav-bar">

                <Row >

                    <Col span={11}>
                        <div className="navbar--div">
                            <Link to={"/"} className="navbar--links">Home</Link>
                            <Link to={"/about"} className="navbar--links">About</Link>
                            <Link to={"/interactive_experiences"} className="navbar--links">Interactive Experiences</Link>
                        </div>
                    </Col>

                    <Col span={2}>
                        <div className="nav-bar--logo-div">
                            <img src={logo} alt="cojon" className="nav-bar--logo"/>
                        </div>
                    </Col>

                    <Col span={11}>
                        <div className="navbar--div">      
                            <Link to={"/algorithms"} className="navbar--links">Algorithms</Link>
                            <Link to={"/equations"} className="navbar--links">Equations</Link>
                            <Link to={"/data"} className="navbar--links">Data</Link>
                        </div>
                    </Col>

                </Row>
                
            </div>

      

        <div className='buffer'></div>
    
        <Outlet />
    </>
    )
}
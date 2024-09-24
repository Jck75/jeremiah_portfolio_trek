import React from "react"
import logo from "../Assets/Cojon.png"
import {Col, Divider, Row} from "antd"
export default function Header(props){
    return(
        <>
            <Row className="nav-bar">
                <Col flex={1}>
                    <div className="navbar--div-left">
                        <h3>About</h3>
                        <h3>Interactive Experiences</h3> 
                    </div>
                </Col>
                <Col flex={1}>
                    
                    <img src={logo} alt="cojon" className="nav-bar--logo"/>
                    
                </Col>
                <Col flex={1}> 
                        <div className="navbar--div-right">      
                            <h3>Algorithms</h3>
                            <h3>Equations</h3> 
                        </div>
         
                </Col>

            </Row>
        </>
    )
}
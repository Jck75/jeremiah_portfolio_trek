import Link from "antd/es/typography/Link"
import React from "react"
import instagram_logo from "../Assets/instagram_logo.png"
export default function MainGrid(props){

    return(
        <div style={{backgroundColor:'#000080', paddingBottom:'0', position:'absolute', left:'0', bottom:'0', height:'100px', width:'100%', overflow:'hidden'}}>
            <h1 style={{fontSize:'30px', color:'#cca43b', textAlign:'left', paddingTop:'20px', paddingLeft:'30px'}}>Contacts</h1>
            <a href="https://www.instagram.com/jck_75_/">
                <img src={instagram_logo} style={{height:'50px'}}></img>
            </a>
        </div>
    )
}
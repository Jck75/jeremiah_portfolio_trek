import React from "react"
import instagram_logo from "../Assets/instagram_logo.png"
import email_logo from "../Assets/email_logo.webp"
import { Row, Col } from "antd"
export default function MainGrid(props){

    return(

        <div style={{backgroundColor:'#000080', position:'absolute', left:'0', bottom:'0', height:'100px', width:'100%', overflow:'hidden', display:"flex"}}>
           
            <div className="footer-contact-div">
                <h1 style={{fontSize:'30px', color:'#cca43b'}}>Contacts</h1>
            </div>

            <div className="footer-contact-div">
                <div>
                    <a href="https://www.instagram.com/jck_75_/">
                        <img src={instagram_logo} style={{width:'50px', marginLeft:'auto', marginRight:'auto'}}/>
                    </a>
                    <h3 style={{color:'#ccc',fontSize:'12px', marginLeft:'auto', marginRight:'auto', padding:'0', margin:'0'}}>@jck_75</h3>
                </div>
            </div>

            <div className="footer-contact-div">
                <div>  
                    <img src={email_logo} style={{width:'60px', paddingTop:'8px', marginLeft:'auto', marginRight:'auto'}}/>
                    <h3 style={{color:'#ccc',fontSize:'12px', marginLeft:'auto', marginRight:'auto', padding:'0', margin:'0'}}>@jkeddie000@icloud.com</h3>
                </div>
            </div>
            <div style={{marginLeft:'auto', padding:'20px', paddingTop:'50px'}}>
                <p style={{color:'#fff'}} color="#fff">
                    Made by Jeremiah Cojon Keddie
                </p>
                
            </div>
        </div>
        
    )
}
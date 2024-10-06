import React from "react"
import instagram_logo from "../Assets/instagram_logo.png"
import email_logo from "../Assets/email_logo.webp"
export default function MainGrid(props){

    return(

        <div style={{backgroundColor:'#000080', paddingBottom:'0', position:'absolute', left:'0', bottom:'0', height:'100px', width:'100%', overflow:'hidden', display:'flex', flexDirection:'row', alignItems:'center'}}>
            <h1 style={{fontSize:'30px', color:'#cca43b', textAlign:'left', padding:'30px', marginTop:'auto', marginBottom:'auto'}}>Contacts</h1>
            
            <div style={{paddingLeft:'100px', paddingTop:'0', paddingBottom:'0'}}>
                <a href="https://www.instagram.com/jck_75_/" style={{padding:'0'}}>
                    <img src={instagram_logo} style={{height:'50px'}}/>
                </a>
                <h3 style={{color:'#ccc',fontSize:'12px', padding:'0', margin:'0'}}>@jck_75</h3>
            </div>

            <div style={{paddingLeft:'100px', paddingTop:'0', paddingBottom:'0'}}>
                <img src={email_logo} style={{height:'35px', paddingTop:'8px'}}/>
                <h3 style={{color:'#ccc',fontSize:'12px', paddingTop:'5px', margin:'0'}}>@jkeddie000@icloud.com</h3>
            </div>
            
        </div>
        
    )
}
import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd";
import jeremiah_photo from "../Assets/Cojon.png"
//Change later 
import logo from "../Assets/Cojon.png"
function About() {
  return (
    <div>
      
      <Divider children={"About"} style={{  borderColor: '#7cb305', fontSize:30}} />
      <div style={{height: '15px'}}></div>

      <Row justify="space-evenly">

        <Col span={7}>
          <img src={logo} alt="whoops" />
        </Col>

        <Col span={14} style={{paddingLeft:'60px', paddingRight:'60px'}}>
          <div style={{height: '500px', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
            
              <Divider children={"About me"} style={{  borderColor: '#7cb305', fontSize:22}} ></Divider>
              <p style={{fontSize:'20px'}}>
                My name is Jeremiah, and I am currently a senior in highschool. I want to start 
                developing my programming skills before going to college, so I decided to make this 
                website to not only show it off, but to give me motivation to work on some of the 
                core aspects of programming (Simulations/Interactive Experiences, Algorithms, and Data)
              </p>
              <Divider children={"Extra"} style={{borderColor: '#000000', fontSize:18, paddingLeft:'50px', paddingRight:'50px'}} ></Divider>
              <p style={{fontSize:'20px'}}>
                I was born in Guatemala in 2007, then moved here at around 3. My dad was born in Guatemala, my 
                Mom in the US, and I have the blessing of being bilingual. I am a Christian, and go to a hispanic speaking 
                church started by my dad which is part of a larger church called Elmbrook. I've volunteered at this church 
                since 2020 helping with the audio-visual effects and recently I have started training others to do the same
              </p>
            
          </div> 
        </Col>
      </Row>

      <div style={{height:'50px'}}>

      </div>

      <div style={{display:"flex", flexDirection:'column', marginLeft:'auto', marginRight:'auto', backgroundColor:'#fffff', width:'950px', height:'550px', outline:'2px solid #000'}}> 
        
        <h1 style={{marginLeft:'auto', marginRight:'auto'}} >Job Experiences</h1>
        
        <ul className="jobs" style={{marginRight:'auto'}}>
            
            <li > 
              Ultrasound AI, Software Tester + Test Maker
            </li>
            <p> This was my first job, I ran and later made tests for an AI that looked at ultrasound images that then predicted when a baby would be born, 
                as well as tests that tested the security of the website, the sign up process, and the client side of the website
                 I also learned the basics of the terminal and AWS, as well as working with Orcanos. Worked here for 3 months
            </p>

            <li>
              Deeplook AI, Data engineering
            </li>
            <p>Contracted work rather than an actual job, I was tasked with finding Mammogram scans that were edited by doctors as test cases 
               for an ai which was trying to identify breast cancer, and then edit their metadata to fit the format needed by the company
               I learned how to use Confluense and how to mess with the metadata of DICOM files
            </p>

            <li>
              Multimedica/Alfarero clinic, Frontend Dev, using react
            </li> 
            <p> 
              My current job is all volenteer work. It is an already made website, but I am adding new content to it, specifically a members page. 
              It is what prompted making this website as I wanted to actually learn how to do what is needed instead of winging it. The company is 
              based in Zona 3 of Guatemala, a major part of the economy being the dump with guajeros(a trash collector), and people who try to 
              refurbish the trash. Alfarero Clinic tries to offer residents of zona 3 low cost medical care, and the website is how they manage patients.
              Ive worked here for 2 months so far
            </p>
        </ul>

      </div>
      <Row justify="space-evenly" style={{paddingTop:'50px'}}>
        <Col span={14}>
          <div style={{height: '500px', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
            <Divider children={"Volunteering in Guatemala"} style={{  borderColor: '#9cb305', fontSize:30}} ></Divider>
            <p  style={{fontSize:'20px'}}>
              Through my church, I was went on two mission trips to where I was born, Guatemala. On these mission trips, 
              we went to help out feeding centers for kids, but focused more on the staff as they very often get overlooked 
              on trips like these. I also came up with the idea to create a pickleball court at an orphanage during 
              the first trip and then maintained it during the second one. There was one deaf kid named Edgar who played 
              with me for two hours a day (he never beat me once!). These trips have been some of the most transformative 
              experiences I have been through. 
            </p>

               
            
          </div>
        </Col>

        <Col span={7}>
          <img src={logo}></img>
        </Col>      
      </Row>
      
    </div>
  );
}

export default About;

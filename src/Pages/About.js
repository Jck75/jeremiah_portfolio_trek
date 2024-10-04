import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd";
function About() {
  return (
    <div>
      
      <Divider children={"About Me"} style={{  borderColor: '#7cb305', fontSize:30}} />
      <Row justify="space-evenly">
        <Col span={7} className="maingrid-container">
        </Col>
        <Col span={7} className="maingrid-container">
        </Col>
        <Col span={7} className="maingrid-container">
        </Col>
      </Row>
      

      <Row justify="space-evenly">
        <Col span={10} className="maingrid-container">
        </Col>
        <Col span={10} className="maingrid-container">
        </Col>
      </Row>


    </div>
  );
}

export default About;

import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd";


function Algorithms() {
  return (
    <div>
      <Divider children={"Algorithms"} style={{  borderColor: '#7cb305', fontSize:30}} />
      <div className="maingrid">
        <div className="maingrid-container-div">
            <Row justify="space-evenly">

                <Col span={7} className="gutter-row">
                    <div className="maingrid-container">  
                      <h1></h1>
                    </div> 
                </Col>

                <Col span={15} className="gutter-row">
                    <div className="maingrid-container">    
                      
                    </div> 
                </Col>

            </Row>
        </div>
    </div>
  </div>
  );
}

export default Algorithms;
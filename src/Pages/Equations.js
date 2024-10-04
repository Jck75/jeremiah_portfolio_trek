import MainGrid from '../Components/MainGrid';
import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd";
function Equations() {
  return (
    <div>
      <Divider children={"Equations"} style={{  borderColor: '#7cb305', fontSize:30}} />
      <MainGrid silly={"Equations"}/>

    </div>
  );
}

export default Equations;

import React from "react"
import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd"
import { Expression, GraphingCalculator, useCalculator } from "desmos-react";
import Equations from "../Pages/Equations";
export default function MainGrid(props){

    return(
<div className="maingrid">
    <div className="maingrid-container-div">
        <Row justify="space-evenly">

            <Col span={7} className="gutter-row">
                <div className="maingrid-container">  
                    
                    <h1>Microsoft Question</h1>
                        <p>If we have a game where I have a number 1-100 and offer you 5 dollars. You have to guess, and I say higher or lower. Each guess takes up a dollar, and can go negative. Should you play the game?</p>
                    <h2>My solution:</h2>
                        <p>Expected value formula: (n * p)</p>
                        <p>n = amount gained  p = probability</p>
                        <p>Amount gained = starting amount - x, where x is a guess</p>
                        <p>Probability = (2^x)/100 When using optimal strategy, which in this game is similar to a bns</p>
                        <p>Expected value = ((starting amout - x) (2^x))/100</p>
                        <p>Next we take the integral of this value, from 0 to ln100/ln2(Max amount of guesses), as the area under the curve will equal the total amount of money gained</p>
                        <p>This gives us our answer of: -.383</p>
                        <h3>We should NOT play this game at those bounds</h3>
                </div> 
            </Col>

            <Col span={15} className="gutter-row">
                <div className="maingrid-container">    
                <GraphingCalculator
                    attributes={{ className: "calculator" }}
                    projectorMode
                    settingsMenu={false}
                    pasteGraphLink={true}
                    keypad={true} 
                    zoomButtons={false}
                >
                <SetMathBounds />
                </GraphingCalculator>
                </div> 
            </Col>

        </Row>
    </div>
</div>
    )
}

function SetMathBounds(){
    const calc = useCalculator();
    const hasRun = useRef(false);
    if (!hasRun.current) {

      calc.setMathBounds({
        top: 2,
        bottom: -3,
        left: -1,
        right: 9,
      });

      let str = String.raw`\int_{0}^{\frac{\ln100}{\ln2}}\left(\frac{\left(5-x\right)\cdot2^{x}}{100}\right)dx`;       
      let str1 = String.raw`\frac{\left(\left(5-x\right)\cdot2^{x}\right)}{100}`;          
      let str2 = String.raw`\frac{\left(\left(5-x\right)\cdot2^{x}\right)}{100}\ge y\ge0`;
      let str3 = String.raw`\frac{\left(\left(5-x\right)\cdot2^{x}\right)}{100}\le y\le0`;
      let str4 = String.raw`x=\frac{\ln100}{\ln2}`;

      calc.setExpression({id:"1", latex:str});
      calc.setExpression({id:"2", latex:str1});
      calc.setExpression({id:"3", latex:str2, secret:true});
      calc.setExpression({id:"4", latex:str3, secret:true});
      calc.setExpression({id:"5", latex:str4, secret:true});

      hasRun.current = true;
    }
    return null;
}

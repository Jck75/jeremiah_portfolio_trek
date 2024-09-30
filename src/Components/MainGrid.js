import React from "react"
import { useEffect, useRef } from "react";
import {Col, Divider, Row} from "antd"
import { Expression, GraphingCalculator, useCalculator } from "desmos-react";
export default function MainGrid(props){

    return(
<div className="maingrid">
    <div className="maingrid-container-div">
        <Row justify="space-evenly">

            <Col span={7} className="gutter-row">
                <div className="maingrid-container">  
                    {props.silly }
                    <h1>Microsoft Question</h1>
                        <p>If we have a game where I have a number 1-100 and offer you 5 dollars. You have to guess, and I say higher or lower. Each guess takes up a dollar, and can go negative. Should you play the game?</p>
                    <h2>My solution:</h2>
                        <p>Expected value formula: (n * p)</p>
                        <p>n = amount gained  p = probability</p>
                        <p>Amount gained = starting amount - x, where x is a guess</p>
                        <p>Probability = (2^x)/100 When using optimal strategy, which in this game is similar to a bns</p>
                        <p>Expected value = ((starting amout - x) (2^x))/100</p>
                        <p>Next we take the integral of this value</p>
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
                >
                    <Expression
                        id="skibidi"
                        latex="\int_{0}^{\frac{\ln100}{\ln2}}\left(\frac{\left(5-x\right)\cdot2^{x}}{100}\right)dx"
                    />
                    <Expression
                        id="whatthesigma"
                        fill={true}
                        latex="\frac{\left(\left(5-x\right)\cdot2^{x}\right)}{100}"
                    />
                </GraphingCalculator>
                </div> 
            </Col>

        </Row>
    </div>
</div>
    )
function SetMathBounds(){
    const calc = useCalculator();
    const hasRun = useRef(false);
    if (!hasRun.current) {
        const bounds = calc.graphpaperBounds.mathCoordinates;
        calc.setMathBounds({
            top: 3.5,
            bottom: -3.5,
            left: -((7 * bounds.width) / bounds.height) / 2,
            right: (7 * bounds.width) / bounds.height / 2
        });
        hasRun.current = true;
    }
    return null;
    }
}

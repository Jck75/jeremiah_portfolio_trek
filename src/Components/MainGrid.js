import React from "react"
import {Col, Divider, Row} from "antd"

export default function MainGrid(props){
    return(
        <>
        <h1></h1>
        <Row className="maingrid-container">
            <Col flex={2}>2/6</Col>
            <Col flex={4}>4/6</Col>
        </Row>
        </>
    )
}

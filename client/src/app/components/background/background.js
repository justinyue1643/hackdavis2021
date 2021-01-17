import React from 'react'
import Boat from './boatbase.svg'
import Hill1 from './hills.svg'
import Hill2 from './hills2.svg'

import {Container, Row, Col } from 'react-bootstrap'

function Background (){
    return (
        <div>
            <Row style={{position: "absolute", zIndex: "2", width: "100%", bottom: "0", margin: "0px"}}>
                <Col style={{paddingLeft: "0px"}}>
                    <img src={Hill1} style={{left: "0", padding: "0px"}}></img>
                </Col>
                <Col/>
                <Col style = {{paddingRight: "0px"}}>
                    <img src={Hill2} style={{right: "0"}}></img>
                </Col>
            </Row>
            <img src={Boat} style={{position: "absolute", bottom: "0", right: "0", paddingRight: "0px"}}></img>
        </div>
    );
}

export default Background;
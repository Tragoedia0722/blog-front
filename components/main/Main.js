import React from 'react';
import classes from "./Main.module.css";
import {Col, Row} from "antd";


const Main = (props) => {


    return (
        <div>
            <Row className={classes.main} type={"flex"} justify="center">
                <Col className={classes.left} xs={24} sm={24} md={14} lg={14} xl={14}>
                    {props.left}
                </Col>
                <Col className={classes.right} xs={0} sm={0} md={4} lg={4} xl={4}>
                    {props.right}
                </Col>
            </Row>
        </div>
    );
};

export default Main;
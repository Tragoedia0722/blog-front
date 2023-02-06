import React from 'react';
import classes from "./Main.module.css";
import {Col, Row} from "antd";


const Main = (props) => {


    return (
        <div>
            <Row className={classes.main} type={"flex"} justify="center">
                <Col className={classes.left} xs={24} sm={24} md={16} lg={18} xl={14}>
                    {props.left}
                </Col>
                <Col className={classes.right} xs={0} sm={0} md={7} lg={5} xl={4}>
                    {props.right}
                </Col>
            </Row>
        </div>
    );
};

export default Main;
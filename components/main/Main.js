import React from 'react';
import classes from "./Main.module.css";
import {Col, Row} from "antd";
import Author from "./author/Author";
import Advert from "./advert/Advert";

const Main = (props) => {
    return (
        <div>
            <Row className={classes.main} type={"flex"} justify="center">
                <Col className={classes.left} xs={24} sm={24} md={16} lg={18} xl={14}>
                    {props.left}
                </Col>
                <Col className={classes.right} xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert advert={
                        <div>杭州男士求脱单，详细加Q 1050469929</div>
                    }/>
                    <Advert advert={
                        <div>广告位招租</div>
                    }/>
                    <Advert advert={
                        <div>广告位招租</div>
                    }/>
                </Col>
            </Row>
        </div>
    );
};

export default Main;
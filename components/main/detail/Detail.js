import React from 'react';
import classes from "./Detail.module.css";
import {Breadcrumb} from "antd";
import ReactMarkDown from "react-markdown";

const Detail = (props) => {
    return (
        <>
            <div className={classes.bread}>
                <Breadcrumb>
                    <Breadcrumb.Item><a href={"/"}>首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href={"/"}>文章</a></Breadcrumb.Item>
                    <Breadcrumb.Item><span>{props.title}</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.icon}>
                <span>{props.date}</span>
                <span># {props.type}</span>
            </div>
            <div className={classes.content}>
                <ReactMarkDown skipHtml={false}>
                    {props.content}
                </ReactMarkDown>
            </div>
        </>
    );
};

export default Detail;
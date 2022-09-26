import React from 'react';
import classes from "./Detail.module.css";
import {Breadcrumb} from "antd";
import ReactMarkDown from "react-markdown";

const Detail = () => {
    return (
        <>
            <div className={classes.bread}>
                <Breadcrumb>
                    <Breadcrumb.Item><a href={"/"}>首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href={"/"}>文章</a></Breadcrumb.Item>
                    <Breadcrumb.Item><span>详情</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={classes.title}>
                这里是文章标题
            </div>
            <div className={classes.icon}>
                <span>发布时间：2022-09-26</span>
                <span>分类：记录</span>
            </div>
            <div className={classes.content}>
                <ReactMarkDown skipHtml={false}>
                    {`### markdown`}
                </ReactMarkDown>
            </div>
        </>
    );
};

export default Detail;
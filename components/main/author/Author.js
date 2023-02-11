import React from 'react';
import classes from "./Author.module.css";
import {Avatar, Divider, Tooltip} from "antd";
import {GithubOutlined, QqOutlined, WechatOutlined} from "@ant-design/icons"

const Author = () => {
    return (
        <div className={classes.author}>
            <div>
                <Avatar src={"https://image.tragoedia.cn/jpg/blog_avatar.jpg"} size={100}>
                </Avatar>
            </div>
            <div className={classes.info}>
                特拉戈
                <p>Tragoedia</p>
                <div>后端开发程序员，记录工作、学习、生活。</div>
                <Divider>社交账号</Divider>
                <Tooltip title={"Tragoedia0722"}>
                    <Avatar size={28} icon={<GithubOutlined/>} className={`${classes.account} ${classes.github}`}/>
                </Tooltip>
                <Tooltip title={"407172162"}>
                    <Avatar size={28} icon={<QqOutlined/>} className={`${classes.account} ${classes.qq}`}/>
                </Tooltip>
                <Tooltip title={"Tragoedia"}>
                    <Avatar size={28} icon={<WechatOutlined/>} className={`${classes.account} ${classes.wechat}`}/>
                </Tooltip>
            </div>
        </div>
    );
};

export default Author;
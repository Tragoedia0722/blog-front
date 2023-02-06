import React from 'react';
import classes from "./Author.module.css";
import {Avatar, Divider} from "antd";
import {GithubOutlined, QqOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons"

const Author = () => {
    return (
        <div className={classes.author}>
            <div>
                <Avatar
                    size={100}
                    icon={<UserOutlined/>}
                />
            </div>
            <div className={classes.info}>
                特拉戈
                <p>Tragoedia</p>
                <div>后端开发程序员，记录工作、学习、生活。</div>
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined/>} className={classes.account}/>
                <Avatar size={28} icon={<QqOutlined/>} className={classes.account}/>
                <Avatar size={28} icon={<WechatOutlined/>} className={classes.account}/>
            </div>
        </div>
    );
};

export default Author;
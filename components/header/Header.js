import React from 'react';
import classes from "./Header.module.css";
import {Col, Menu, Row} from "antd";
import {HomeOutlined} from "@ant-design/icons"

const Header = () => {
    const items = [
        {
            key: 'home',
            label: '首页',
            icon: <HomeOutlined/>
        },
        {
            label: '菜单项二',
            key: 'item-2',
            icon: <HomeOutlined/>
        },
        {
            label: '菜单项三',
            key: 'item-3',
            icon: <HomeOutlined/>
        }
    ];

    return (
        <div className={classes.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={classes.logo}>特拉戈</span>
                    <span className={classes.text}>Tragoedia</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu mode="horizontal" className={classes.menu} items={items}/>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
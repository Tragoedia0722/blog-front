import React from 'react';
import classes from "./Header.module.css";
import {Col, Menu, Row} from "antd";
import {BulbOutlined, CameraOutlined, SmileOutlined} from "@ant-design/icons"
import Link from "next/link";

const Header = () => {
    const items = [
        {
            label:
                <Link href={{
                    pathname: '/[typeKey]/[page]',
                    query: {typeKey: 'tech', page: 1},
                }}>
                    <a>技术</a>
                </Link>,
            key: 'item-1',
            icon: <BulbOutlined style={{fontSize: '1rem'}}/>
        },
        {
            label:
                <Link href={{
                    pathname: '/[typeKey]/[page]',
                    query: {typeKey: 'photo', page: 1},
                }}>
                    <a>摄影</a>
                </Link>,
            key: 'item-2',
            icon: <CameraOutlined style={{fontSize: '1rem'}}/>
        },
        {
            label:
                <Link href={{
                    pathname: '/[typeKey]/[page]',
                    query: {typeKey: 'life', page: 1},
                }}>
                    <a>生活</a>
                </Link>,
            key: 'item-3',
            icon: <SmileOutlined style={{fontSize: '1rem'}}/>
        },
    ];

    return (
        <div className={classes.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <div className={classes.info}>
                        <Link href={{
                            pathname: '/',
                        }}>
                            <a>
                                <span className={classes.logo}>特拉戈</span>
                                <span className={classes.text}>Tragoedia</span>
                            </a>
                        </Link>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu
                        mode="horizontal"
                        className={classes.menu}
                        items={items}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Header;
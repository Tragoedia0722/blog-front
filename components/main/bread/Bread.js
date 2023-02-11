import React from 'react';
import {Breadcrumb} from "antd";
import classes from "./Bread.module.css";
import Link from "next/link";

const Bread = (props) => {

    if (props.detail === true) {
        return (
            <div className={classes.bread}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link href={"/"}>首页</Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                        <Link href={{
                            pathname: '/[typeKey]/[page]',
                            query: {typeKey: props.typeKey, page: 1},
                        }}>
                            <a>{props.typeName}</a>
                        </Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item><span>{props.title}</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    } else {
        return (
            <div className={classes.bread}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link href={"/"}>首页</Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item><span>{props.typeName}</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
};

export default Bread;
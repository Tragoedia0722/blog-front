import React from 'react';
import classes from "./DetailNav.module.css";
import {Affix} from "antd";
import MarkNav from "markdown-navbar"

const DetailNav = (props) => {
    return (

        <Affix>
            <div className={classes.detailNav}>
                <div className={classes.title}>文章目录</div>
                <MarkNav
                    className={classes.menu}
                    source={props.content}
                    ordered={false}
                />
            </div>
        </Affix>

    );
};

export default DetailNav;
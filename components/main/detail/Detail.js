import React from 'react';
import classes from "./Detail.module.css";
import ReactMarkDown from "react-markdown";
import Bread from "../bread/Bread";

const Detail = (props) => {

    return (
        <>
            <Bread
                detail={true}
                typeKey={props.typeKey}
                typeName={props.typeName}
                title={props.title}
            ></Bread>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.icon}>
                <span>{props.date}</span>
                <span># {props.typeName}</span>
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
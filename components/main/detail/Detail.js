import React from 'react';
import classes from "./Detail.module.css";
import {marked} from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css'
import Bread from "../bread/Bread";

const Detail = (props) => {
    marked.setOptions({
        render: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })

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
            <div className={classes.content} dangerouslySetInnerHTML={{__html: marked(props.content)}}/>
        </>
    );
};

export default Detail;
import React, {useState} from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import Main from "../components/main/Main"
import {Breadcrumb, List} from "antd";
import classes from "../components/main/Main.module.css";
import {CalendarOutlined, FolderOutlined} from "@ant-design/icons";
import Footer from "../components/footer/Footer";

const Home = () => {
    const [dataSource, setDataSource] = useState([
            {
                title: '标题一',
                date: '2022-09-25',
                type: '记录',
                context: '特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈'
            },
            {
                title: '标题二',
                date: '2022-09-25',
                type: '记录',
                context: '特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈'
            },
            {
                title: '标题三',
                date: '2022-09-25',
                type: '记录',
                context: '特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈'
            },
            {
                title: '标题四',
                date: '2022-09-25',
                type: '记录',
                context: '特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈'
            },
            {
                title: '标题五',
                date: '2022-09-25',
                type: '记录',
                context: '特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈特拉戈'
            }
        ]
    )

    const left = (
        <>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item><a href={"/"}>首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><span>文章</span></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <List
                itemLayout={"vertical"}
                dataSource={dataSource}
                renderItem={item => (
                    <List.Item>
                        <div className={classes.title}>{item.title}</div>
                        <div className={classes.icon}>
                    <span>
                        <CalendarOutlined/>&nbsp;{item.date}
                    </span>
                            &nbsp;&nbsp;
                            <span>
                        <FolderOutlined/>&nbsp;{item.type}
                    </span>
                        </div>
                        <div className={classes.context}>
                            {item.context}
                        </div>
                    </List.Item>
                )}/>
        </>
    )

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Header/>
            <Main left={left}/>
            <Footer/>
        </>
    )
}


export default Home
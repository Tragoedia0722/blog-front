import React from 'react'
import Head from 'next/head'
import Header from "../../components/header/Header";
import Main from "../../components/main/Main"
import {Breadcrumb, List} from "antd";
import classes from "../../components/main/Main.module.css";
import {CalendarOutlined, FolderOutlined} from "@ant-design/icons";
import Footer from "../../components/footer/Footer";
import Author from "../../components/main/author/Author";
import Advert from "../../components/main/advert/Advert";
import axios from "axios";
import Link from "next/link";
import servicePath from "../../config/apiUrl";

const Home = (props) => {

    // Main左侧界面
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
                dataSource={props.data.data}
                renderItem={item => (
                    <List.Item>
                        <div className={classes.title}>
                            <Link href={{
                                pathname: '/detail',
                                query: {id: item.id},
                            }}>
                                <a>{item.title}</a>
                            </Link>
                        </div>
                        <div className={classes.icon}>
                    <span>
                        <CalendarOutlined/>&nbsp;{item.date}
                    </span>
                            &nbsp;&nbsp;
                            <span>
                        <FolderOutlined/>&nbsp;{item.type}
                    </span>
                        </div>
                        <div className={classes.content}>
                            {item.content}
                        </div>
                    </List.Item>
                )}/>
        </>
    )

    // Main右侧界面
    const right = (
        <>
            <Author/>
            <Advert/>
        </>
    )

    // 渲染
    return (
        <>
            <Head>
                <title>List</title>
            </Head>

            <Header/>
            <Main left={left} right={right}/>
            <Footer/>
        </>
    )
}

// 初始化静态方法
export async function getServerSideProps() {
    const {data} = await axios.get(servicePath.articles);
    return {
        props: {
            data
        },
    }
}

export default Home
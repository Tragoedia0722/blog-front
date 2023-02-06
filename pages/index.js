import React from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import Main from "../components/main/Main"
import Footer from "../components/footer/Footer";
import Author from "../components/main/author/Author";
import Advert from "../components/main/advert/Advert";
import axios from "axios";
import servicePath from "../config/apiUrl";
import ArticleList from "../components/main/article-list/ArticleList";

const Home = (props) => {

    // Main左侧界面
    const left = (
        <>
            <ArticleList data={props.data}/>
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
                <title>首页</title>
            </Head>

            <Header/>
            <Main left={left} right={right}/>
            <Footer/>
        </>
    )
}

// 初始化静态方法
export async function getServerSideProps(context) {
    if (context.query.page === undefined) {
        context.query.page = 1;
    }

    const {data} = await axios.get(servicePath.articles + context.query.page);
    return {
        props: {
            data
        },
    }
}

export default Home
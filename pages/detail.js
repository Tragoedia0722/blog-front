import React from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import Main from "../components/main/Main"
import Footer from "../components/footer/Footer";
import Detail from "../components/main/detail/Detail";
import Author from "../components/main/author/Author";
import Advert from "../components/main/advert/Advert";
import 'markdown-navbar/dist/navbar.css';
import DetailNav from "../components/main/detail-nav/DetailNav";

const DetailPage = () => {

    const data = {
        title: "标题",
        date: "2022-09-26",
        type: "记录",
        content: '\n' +
            '# 一级标题\n' +
            '## 二级标题\n' +
            '### 三级标题\n' +
            '#### 四级标题\n' +
            '##### 五级标题\n' +
            '###### 六级标题'
    }

    const left = (
        <Detail
            title={data.title}
            date={data.date}
            type={data.type}
            content={data.content}
        />
    )

    const right = (
        <>
            <Author/>
            <Advert/>
            <DetailNav content={data.content}/>
        </>
    )

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header/>
            <Main
                left={left}
                right={right}/>
            <Footer/>
        </>
    )
}


export default DetailPage
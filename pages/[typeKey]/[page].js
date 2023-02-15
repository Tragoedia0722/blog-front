import React from 'react';
import Head from "next/head";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import servicePath from "../../config/apiUrl";
import Bread from "../../components/main/bread/Bread";
import ArticleList from "../../components/main/article-list/ArticleList";
import Author from "../../components/main/author/Author";
import Advert from "../../components/main/advert/Advert";

const Type = (props) => {

    // Main左侧界面
    const left = (
        <>
            <div>
                <Bread
                    detail={false}
                    typeName={props.data.data.typeName}
                    typeKey={props.data.data.typeKey}
                ></Bread>
            </div>
            <ArticleList
                data={props.data}
                current={props.current}
            />
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
                <title>{props.data.data.typeName}</title>
            </Head>

            <Header/>
            <Main left={left} right={right}/>
            <Footer/>
        </>
    )
}

// 初始化静态方法
export async function getServerSideProps(context) {

    const {data} = await axios.get(servicePath.articles + context.query.typeKey + "/" + context.query.page);
    return {
        props: {
            current: context.query.page,
            data
        },
    }
}

export default Type

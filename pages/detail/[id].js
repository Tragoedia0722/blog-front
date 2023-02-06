import React from 'react'
import Head from 'next/head'
import Header from "../../components/header/Header";
import Main from "../../components/main/Main"
import Footer from "../../components/footer/Footer";
import Detail from "../../components/main/detail/Detail";
import Author from "../../components/main/author/Author";
import Advert from "../../components/main/advert/Advert";
import 'markdown-navbar/dist/navbar.css';
import DetailNav from "../../components/main/detail-nav/DetailNav";
import axios from "axios";
import servicePath from "../../config/apiUrl";

const DetailPage = ({data}) => {

    const left = (
        <Detail
            title={data.data.title}
            date={data.data.date}
            type={data.data.type}
            content={data.data.content}
        />
    )

    const right = (
        <>
            <Author/>
            <Advert/>
            <DetailNav content={
                data.data.content
            }/>
        </>
    )

    return (
        <>
            <Head>
                <title>{data.data.title}</title>
            </Head>

            <Header/>
            <Main
                left={left}
                right={right}/>
            <Footer/>
        </>
    )
}

// 初始化静态方法
export async function getServerSideProps(context) {
    const {data} = await axios.get(servicePath.article + context.query.id);

    return {
        props: {
            data
        },
    }
}

export default DetailPage
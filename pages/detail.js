import React from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import Main from "../components/main/Main"
import Footer from "../components/footer/Footer";
import Detail from "../components/main/detail/Detail";

const DetailPage = () => {

    return (
        <>
            <Head>
                <title>Title</title>
            </Head>

            <Header/>
            <Main left={<Detail/>}/>
            <Footer/>
        </>
    )
}


export default DetailPage
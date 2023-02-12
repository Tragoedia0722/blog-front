import React from 'react';
import classes from "./ArticleList.module.css";
import {Col, List, Pagination, Row} from "antd";
import Link from "next/link";
import {CalendarOutlined, FolderOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

const ArticleList = (props) => {
    const router = useRouter()
    const change = (page) => {

        if (props.data.data.typeKey === undefined) {
            router.push(
                {
                    pathname: '/',
                    query: {page: page},
                }
            ).then()
        } else {
            router.push(
                {
                    pathname: '/[typeKey]/[page]',
                    query: {typeKey: props.data.data.typeKey, page: page},
                }
            ).then()
        }
    }

    return (
        <div className={classes.list}>
            <List
                itemLayout={"vertical"}
                dataSource={props.data.data.records}
                loading={false}
                split={false}
                renderItem={item => (
                    <List.Item className={classes.item}>
                        <Row className={classes.main} type={"flex"} justify="center">
                            {/*                            <Col
                                className={classes.left}
                                xs={0} sm={10} md={10} lg={10} xl={10}
                            >
                                <Image height={900} width={1600} src={'/1.jpg'}/>
                            </Col>*/}

                            <Col
                                className={classes.right}
                                xs={24} sm={24} md={24} lg={24} xl={24}
                            >
                                <div className={classes.title}>
                                    <Link href={{
                                        pathname: '/detail/[id]',
                                        query: {id: item.id},
                                    }}>
                                        {item.title}
                                    </Link>
                                </div>

                                <div className={classes.icon}>
                                    <span>
                                        <CalendarOutlined/>&nbsp;{item.date}
                                    </span>
                                    &nbsp;&nbsp;
                                    <span>
                                        <FolderOutlined/>&nbsp;{item.typeName}
                                    </span>
                                </div>

                                <div className={classes.introduce}>
                                    {item.introduce}
                                </div>
                            </Col>

                        </Row>


                    </List.Item>
                )}/>
            <Row type={"flex"} justify="center">
                <Pagination
                    onChange={change}
                    defaultCurrent={1}
                    total={props.data.data.total}
                    pageSize={5}
                />
            </Row>

        </div>
    );
};

export default ArticleList;
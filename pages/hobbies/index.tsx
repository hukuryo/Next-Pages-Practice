import Head from "next/head";
import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { PageTitle } from "../../components/PageTitle";
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { PageTracking } from "@/components/PageTracking";
import { Layout } from "@/components/Layout";
import { ArticleProps } from "../../types/article";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "articles" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function books({ articles }: ArticleProps) {
    const hobbyArticles = articles.filter(article => article.kinds[0] === "hobby");
    
    return (
        <>
            <Head>
                <title>趣味</title>
            </Head>
            <Header />
            <PageTracking pass={"hobbies"} pageTitle={"趣味"}/>
            <Layout>
                <PageTitle title={"趣味"} />
                <ArticleList articles={ hobbyArticles } pass={"hobbies"} />
                <ScrollUp />
            </Layout>
            <Footer />
        </>
    )
}

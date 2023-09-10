import { Header } from "../../components/Header"
import { client } from "@/lib/client";

import { PageTitle } from "../../components/PageTitle"
import ArticleList from "../../components/ArticleList";
import { Footer } from "../../components/Footer";
import { ScrollUp } from "@/components/ScrollUp";
import { Layout } from "@/components/Layout";
import { PageTracking } from "@/components/PageTracking";
import { SideBar } from "@/components/SideBar";
import { ArticleProps } from "../../types/article";
import Head from "next/head";
import { SearchInput } from "@/components/SearchInput";
import { Profile } from "@/components/Profile";
import { ResponsiveProfile } from "@/components/ResponsiveProfile";

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "articles" });
    
    return {
        props: {
            articles: data.contents,
        },
    };
};

export default function books({ articles }: ArticleProps) {
    
    const bookArticles = articles.filter(article => article.kinds[0] === "books");
    
    return (
        <>
            <Head>
                <title>読んだ書籍一覧</title>
            </Head>
            <Header />
            <PageTracking pass={"books"} pageTitle={"読んだ書籍一覧"}/>
            <Layout>
                <PageTitle title={"読んだ書籍一覧"}/>
                <div className="md:flex justify-between">
                    <ArticleList articles={ bookArticles } pass={"books"} />
                    <SideBar />
                </div>
                <ResponsiveProfile />
            </Layout>
            <ScrollUp />
            <Footer />
        </>
    )
}

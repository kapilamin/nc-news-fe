import { useEffect } from "react";
import { useState } from "react"
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = () => {
    
    const [articlesList, setArticlesList] = useState ([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles().then((data) => {
            setArticlesList(data);
            setIsLoading(false);
        })
    }, []);

    if(isLoading) {
        return <p>Please wait whilst the news loads...</p>
    }

    return (
        <section className="articles-list">
            <ul>
                {articlesList.map((article) => {
                    return <ArticleCard article={article} key={article.article_id}/>
                })}
            </ul>
        </section>
    )
}


    
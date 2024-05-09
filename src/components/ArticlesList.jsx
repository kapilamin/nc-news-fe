import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = () => {
    
    const [articlesList, setArticlesList] = useState ([])
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("DESC")

    useEffect(() => {
        setIsLoading(true);
        getArticles(null, sortBy, orderBy).then((data) => {
            setArticlesList(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Failed to fetch articles', error);
        })
    }, [sortBy, orderBy]);

    if(isLoading) {
        return <p>Please wait whilst the articles are fetched...</p>
    }

    return (
        <>
            <section id="sort-articles-selector">
                <p>Sort articles by:</p>
                <select 
                    id="article-list-sort-by"
                    value={sortBy}
                    onChange={(e) =>{
                        setSortBy(e.target.value)
                    }}
                >
                    <option value="title">Title</option>
                    <option value="topic">Topic</option>
                    <option value="author">Author</option>
                    <option value="created_at">Date created</option>
                    <option value="votes">Vote count</option>
                    <option value="comment_count">Comment count</option>
                </select>    
            </section>
            <section id="order-by-selector">
                <select 
                    id="article-list-order-by"
                    value={orderBy}
                    onChange={(e) => {
                        setOrderBy(e.target.value)
                    }}
                >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>    
            </select>    
            </section>

            <section className="articles-list">
                <ul>
                    {articlesList.map((article) => {
                        return <ArticleCard article={article} key={article.article_id}/>
                    })}
                </ul>
            </section>
        </>
    )
}


    
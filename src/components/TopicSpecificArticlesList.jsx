import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticles } from "../api"
import { ArticleCard } from "./ArticleCard"

export const TopicSpecificArticlesList = () => {
    const {topic} = useParams()

    const [articlesListByTopic, setArticlesListByTopic] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortBy, setSortBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("DESC")

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic, sortBy, orderBy).then((data) => {
            setArticlesListByTopic(data)
            setIsLoading(false)
        })
    }, [topic, sortBy, orderBy])

    if(isLoading) {
        return <p>Please waits whilst your articles load...</p>
    }

    return (
        <>
            <h2>Articles on {topic}</h2>
            <section id="sort-articles-selector">
                <p>Sort articles by:</p>
                <select 
                    id="article-list-sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="title">Title</option>
                    <option value="topic">Topic</option>
                    <option value="author">Author</option>
                    <option value="created_at">Date created</option>
                    <option value="votes">Vote count</option>
                    <option value="article_img_url">Image url</option>
                </select>
            </section>
            <section id="order-by-selector">
                <select 
                    id="article-list-order-by"
                    value={orderBy}
                    onChange={(e) => setOrderBy(e.target.value)}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </section>
            <section className="articles-list">
                <ul>
                    {articlesListByTopic.map((article) => {
                        return <ArticleCard article={article} key={article.article_id} />
                    })}
                </ul>
            </section>
        </>
    )
}
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles, getTopics } from "../api";
import { ArticleCard } from "./ArticleCard";

export const TopicSpecificArticlesList = () => {
    const { topic } = useParams();
    const [topicsList, setTopicsList] = useState([]);
    const [articlesListByTopic, setArticlesListByTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [orderBy, setOrderBy] = useState("DESC");

    useEffect(() => {
        getTopics()
        .then(setTopicsList)
        .catch(console.error);
    }, []);
    

    useEffect(() => {
        if (topic) {
            setIsLoading(true);
            getArticles(topic, sortBy, orderBy)
            .then((data) => {
                setArticlesListByTopic(data);
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
            });
        }
    }, [topic, sortBy, orderBy]);

    if (isLoading) {
        return <p>Please wait whilst your articles load...</p>;
    }

    return (
        <>
            <ul>
            {topicsList.map((topic) => {
                        return <li className="topic-list-item" key={topic.slug}>
                            <Link to={`/ncnews/topics/${topic.slug}`}>
                                <h4>{topic.slug}</h4>
                            </Link>
                        </li>
                    })}
            </ul>

            <section id="sort-articles-selector">
                <p>Sort articles by:</p>
                <select 
                    id="article-list-sort-by" 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="title">Title</option>
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
                    onChange={(e) => setOrderBy(e.target.value)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </section>
            <section className="articles-list">
                <ul>
                    {articlesListByTopic.map((article) => <ArticleCard article={article} key={article.article_id} />)}
                </ul>
            </section>
        </>
    );
};

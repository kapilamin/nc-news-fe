import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticlesById } from "../api";
import { timeSinceDate } from "../utils";

export const SingleItem = () => {
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        setIsLoading(true);
        getArticlesById(article_id)
        .then((data) => {
            setSingleArticle(data.articleObj);
            setIsLoading(false);
        })
    }, [])

    if(isLoading) {
        return <p>Loading article...</p>;
    }

    return (
        <section className="single-article">
            <h2>{singleArticle.title}</h2>
            <p>Date created: {timeSinceDate(new Date(singleArticle.created_at))}</p>
            <p>Author: {singleArticle.author}</p>
            <img src={singleArticle.article_img_url}/>
            <p>{singleArticle.body}</p>
        </section>
    )
}
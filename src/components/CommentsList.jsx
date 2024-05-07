import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId } from '../api';

export const CommentsList = () => {
    const {article_id} = useParams();
    const [commentsList, setCommentsList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id)
        .then ((data) => {
            setCommentsList(data)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return(
            <p>Please wait whilst the comments are fetched...</p>
        )
    }

    return (
        <section className="comments-list">
            <h3>Comments</h3>
            <ul>
                {commentsList.map((comment) => {
                    return <CommentCard comment = {comment} key = {comment.comment_id} />
                })}
            </ul>
        </section>
    )
}
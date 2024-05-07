import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CommentCard } from "./CommentCard";
import { getCommentsByArticleId, postNewComment } from '../api';
import { UserContext } from "../contexts/User";

export const CommentsList = () => {
    const {article_id} = useParams();
    const [commentsList, setCommentsList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [newComment, setNewComment] = useState ({
        username: loggedInUser.username,
        body: ""    })

    const [commentSuccess, setCommentSuccess] = useState(false);
    const [err, setErr] = useState(null);

    useEffect (() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id)
        .then ((data) => {
            setCommentsList(data)
            setIsLoading(false)
        })
    }, [])

    const handleNewCommentInput = (event) => {
        const value = event.target.value; 
        const currentNewComment = {...newComment, body: value}; 
        setNewComment(currentNewComment);
    };

    const handleNewCommentSubmit = (event) => {
        event.preventDefault();

        postNewComment(newComment, article_id)
        .then((response) => {
            setCommentsList((commentSuccess) => {
                return [response, ...commentsList];
            });
            setErr(null);
            setCommentSuccess(true)
            .catch((err) => {
                setErr("Sorry there has been an error. Please try again")
            });
        })
        
        setCommentSuccess(false)
        setNewComment({
            username: loggedInUser.username,
            body: ""
        })
    }
        

    if(isLoading) {
        return(
            <p>Please wait whilst the comments are fetched...</p>
        )
    }

    return (
        <section className="comments-list">
            <h3>Comments</h3>
            {commentSuccess ? <p id="comment-success-text">Your comment has been successfully added! 🥳</p> : null}
            {err ? <p>{err}</p> : null}
            <form className="add-comment-form" onSubmit={handleNewCommentSubmit}>
                <label htmlFor="new-comment_body" className="add-comment-label">
                    New comment: 
                </label>
                    <input
                        type="text"
                        required
                        className="add-comment-input"
                        id="new-comment_body"
                        onChange={handleNewCommentInput}
                        value={newComment.body}
                    />
                <button className="add-new-comment-submit">Add comment</button>    
            </form>
            <ul>
                {commentsList.map((comment) => {
                    return <CommentCard comment = {comment} setCommentsList={setCommentsList} key = {comment.comment_id} />
                })}
            </ul>
        </section>
    )
}
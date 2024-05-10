import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getArticlesById } from "../api";
import { timeSinceDate } from "../utils";
import { CommentsList } from "./CommentsList";
import { ErrorPage } from "./ErrorPage";
import { updateArticleVotes } from '../api';

export const SingleArticle = () => {
    const {article_id} = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null);


    useEffect (() => {
        setIsLoading(true);
        getArticlesById(article_id)
        .then((data) => {
            setSingleArticle(data.articleObj);
            setIsLoading(false);
            setErr(null)
        })
        .catch((err) => {
            setErr(err.response)
        })
    }, [article_id])

    if(err) {
        return <ErrorPage message={err.data.msg} status={err.status} />
    }

    if(isLoading) {
        return <p>Loading article...</p>;
    }


    const handleArticleVote = (vote) => {
        if ((voteChange === -1 && vote === -1) || (voteChange === 1 && vote === 1)) {
            setVoteChange(0);
        } else {
            setVoteChange(vote);
            setErr(null);
            updateArticleVotes(singleArticle.article_id, vote)
                .catch((err) => {
                    console.error("Error encountered", err);
                    setVoteChange(0); 
                    setErr("Voting error, please try again");
                });
        }
    }

    const totalVotes = singleArticle.votes + voteChange;

    return (
        <>
        <section className="single-article">
            <h2>{singleArticle.title}</h2>
            <img src={singleArticle.article_img_url} alt="Article Visual" className="single-article-image"/>
            <p>Date created: {timeSinceDate(new Date(singleArticle.created_at))}</p>
            <p>Author: {singleArticle.author}</p>
            <p>{singleArticle.body}</p>
            <p>Votes: {totalVotes}</p>
        {err ? <p>{err}</p> : null}
                <button className='button-up' onClick={() => handleArticleVote(1)} id="article-up-vote-button">Up vote</button>
                <button className='button-down' onClick={() => handleArticleVote(-1)} id="article-down-vote-button">Down vote</button>
        </section>
        <section className="comments-list">
            <CommentsList />
        </section>
        </>
    )
}
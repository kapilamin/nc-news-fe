import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';
import { useState } from 'react';
import { updateArticleVotes } from '../api';

export const ArticleCard = ({article}) => {

    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null);

    const handleArticleVote = (vote) => {
        if ((voteChange === -1 && vote === -1) || (voteChange === 1 && vote === 1)) {
            setVoteChange(0);
        } else {
            setVoteChange(vote);
            setErr(null);
            updateArticleVotes(article.article_id, vote)
                .catch((err) => {
                    console.error("Error encountered", err);
                    setVoteChange(0); 
                    setErr("Voting error, please try again");
                });
        }
    }

    const totalVotes = article.votes + voteChange;



    return (
        <article className="article-card">
            <Link to={`/ncnews/${article.article_id}`}>
            <section id="article-card-content">
                <li>
                    <h3>{article.title}</h3>
                    <img className='article-image' src={article.article_img_url} alt="image of the article"/>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Created: {timeSinceDate(new Date(article.created_at))}</p>
                    <p>Number of Comments: {article.comment_count}</p>
                    <p>Votes: {totalVotes}</p>
                </li>
            </section>
            </Link>
                {err ? <p>{err}</p> : null}
            <section className="article-card-buttons">   
                <button className='button-up' onClick={() => handleArticleVote(1)} id="article-up-vote-button">Up vote</button>
                <button className='button-down' onClick={() => handleArticleVote(-1)} id="article-down-vote-button">Down vote</button>
            </section>
        </article>
    )
}
import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';
import { useState } from 'react';
import { updateArticleVotes } from '../api';

export const ArticleCard = ({article}) => {

    const [articleVotes, setArticleVotes] = useState(article.votes);
    const [err, setErr] = useState(null);

    const handleArticleUpVote = () => {
        setArticleVotes((currArticleVotes) => currArticleVotes +1)
        setErr(null);
        updateArticleVotes(article.article_id, 1)
        .catch((err) => {
            setArticleVotes((currArticleVotes) => currArticleVotes -1);
            setErr("Voting error, please try again")
        })
    }

    const handleArticleDownVote = () => {
        setArticleVotes((currArticleVotes) => currArticleVotes -1)
        updateArticleVotes(article.article_id, -1)
        .catch((err) => {
            setArticleVotes((currArticleVotes) => currArticleVotes +1);
            setErr("Voting error, please try again")
        })
    }

    return (
        <article className="article-card">
            <Link to={`/ncnews/${article.article_id}`}>
            <section id="article-card-content">
                <li>
                    <h3>{article.title}</h3>
                    <img className='article-image' src={article.article_img_url} alt="image of the article"/>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>Date created: {timeSinceDate(new Date(article.created_at))}</p>
                    <p>Number of Comments: {article.comment_count}</p>
                    <p>Votes: {articleVotes}</p>
                </li>
            </section>
            </Link>
                {err ? <p>{err}</p> : null}
            <section className="article-card-buttons">    
                    <button className='button-up' onClick = {handleArticleUpVote} id = "article-up-vote-button">Up vote</button>
                    <button className='button-down' onClick={handleArticleDownVote} id="article-down-vote-button">Down vote</button>
            </section>

        </article>
    )
}
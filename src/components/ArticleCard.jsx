import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';

export const ArticleCard = ({article}) => {
    return (
        <article className="article-card">
            <li>
                <Link to={`/ncnews/${article.title}`}>
                    <h3>{article.title}</h3>
                </Link>
                <img className='article-image' src={article.article_img_url} alt="image of the article"/>
                <p>Topic: {article.topic}</p>
                <p>Author: {article.author}</p>
                <p>Date created: {timeSinceDate(new Date(article.created_at))}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
                <button className='button-up'>Up vote</button>
                <button className='button-down'>Down vote</button>
            </li>
        </article>
    )
}
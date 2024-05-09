import {Link} from 'react-router-dom';
import {timeSinceDate} from '../utils';

export const ArticleCard = ({article}) => {

    return (
        <article className="article-card">
            <Link to={`/ncnews/${article.article_id}`} className='article-link'>
            <section className="article-card-content">
                <li>
                    <h3 id='article-card-title'>{article.title}</h3>
                    <img className='article-image' src={article.article_img_url} alt="image of the article"/>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <p>{'Date posted: ' + article.created_at.slice(0,10)}</p>
                    <p>Posted: {timeSinceDate(new Date(article.created_at))}</p>
                    <p>Number of Comments: {article.comment_count}</p>
                    <p>Votes: {article.votes}</p>
                </li>
            </section>
            </Link>
        </article>
    )
}
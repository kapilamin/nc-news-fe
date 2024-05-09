import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-xwbn.onrender.com/api/"
});

const handleResponse = (response) => response.data;

export const getArticles = (topic, sort_by, order) => {
    return ncNewsApi.get("articles", {
        params: { topic, sort_by, order }
    }).then(handleResponse);
}


export const getArticlesById = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}`)
    .then(handleResponse);
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}/comments`)
    .then(handleResponse);
}

export const updateArticleVotes = (article_id, inc_votes) => {
    return ncNewsApi.patch(`articles/${article_id}`, { inc_votes })
    .then(handleResponse);
}

export const postNewComment = (newComment, article_id) => {
    return ncNewsApi.post(`articles/${article_id}/comments`, newComment)
    .then(handleResponse)
}

export const deleteCommentById = (comment_id) => {
    return ncNewsApi.delete(`comments/${comment_id}`)
    .then(handleResponse);
}

export const getTopics = () => {
    return ncNewsApi.get("topics")
    .then((response) => {
        return response.data.topicsArr;})
}
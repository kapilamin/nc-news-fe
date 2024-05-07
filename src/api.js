import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-xwbn.onrender.com/api/"
});

export const getArticles = () => {
    return ncNewsApi.get("articles")
    .then((response) => {
        return response.data
    })
}

export const getArticlesById = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}`)
    .then((response) => {
        return response.data;
    })
}

export const getCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
}
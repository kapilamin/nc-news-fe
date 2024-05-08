import { useContext } from "react"
import { timeSinceDate } from "../utils"
import { UserContext } from "../contexts/User"
import { deleteCommentById } from "../api"


export const CommentCard = ({comment, setCommentsList}) => {

    const{loggedInUser, setLoggedInUser} = useContext(UserContext)

    const handleDeleteComment = () => {
        deleteCommentById(comment.comment_id)
        .then(() => {
            setCommentsList((currCommentsList) => {
                const newCommentsList = currCommentsList.filter((currComment) =>
                currComment.comment_id !== comment.comment_id)
                alert("Comment successfully deleted")
                return newCommentsList
            })
        })
        .catch((err) => {
            alert("Comment couldn't be deleted, please try again")
        })
    }
    
    return(
        <article className="comment-card">
            <p>Posted {timeSinceDate(comment.created_at)}</p>
            <p> {'Date posted: ' + comment.created_at.slice(0,10)+ ' at ' + comment.created_at.slice(11, 19)}</p>
            <p>By: {comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {loggedInUser.username === comment.author ? <button onClick={handleDeleteComment} id="delete-comment-button">Delete comment</button> : null}
        </article>
    )
}
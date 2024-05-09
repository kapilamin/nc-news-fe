import { FaHouse } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const ErrorPage = (message) => {

    if(message.status === 400) {
        return (
            <section id="bad-path-error-page">
                <p>Sorry that page doesn't exist... 🙁</p>
                <Link to={'/'}>
                    <button className="back-to-home-button">Back to home page<FaHouse /></button>
                </Link>
            </section>
        )
    }
    
    return (
        <section id="general-error-page">
            <p>Uh oh looks like there's been an error!</p>
            <h3>{message.status}</h3>
            <p>{message.status}</p>
            <Link to={'/'}>
                <button className="back-to-home-button">Back to home page <FaHouse /></button>  
            </Link>
        </section>
    )
}
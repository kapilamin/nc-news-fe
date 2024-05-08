import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../api"

export const TopicsLists = () => {
    const [topicsList, setTopicsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((data) => {
            setTopicsList(data)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <p>Please wait whilst the topics load...</p>
    }

    return (
        <>
            <h2>Article Topics</h2>
            <p>Click on a topic to see a list of related articles</p>
            <section>
                <ul>
                    {topicsList.map((topic) => {
                        return <li className="topic-list-item" key={topic.slug}>
                            <Link to={`/ncnews/topics/${topic.slug}`}>
                                <h4>{topic.slug}</h4>
                            </Link>
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}
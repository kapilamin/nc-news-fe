import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import { ArticlePage } from './components/ArticlePage';
import { SingleArticle } from './components/SingleArticle';
import { TopicsLists } from './components/TopicsList';
import { TopicSpecificArticlesList } from './components/TopicSpecificArticlesList';
import { ErrorPage } from './components/ErrorPage';
import { UsersList } from './components/UsersList';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<ArticlePage />}/>
          <Route path='/ncnews/:article_id' element={<SingleArticle />} />
          <Route path='/ncnews/topics' element={<TopicsLists />} />
          <Route path='/ncnews/topics/:topic' element={<TopicSpecificArticlesList />} />
          <Route path='/ncnews/users' element={<UsersList />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App

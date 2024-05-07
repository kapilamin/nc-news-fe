import './App.css'
import { ArticlesList } from './components/ArticlesList'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App

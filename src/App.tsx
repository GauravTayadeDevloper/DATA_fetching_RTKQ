import './Components/App.css';
import './Components/Header.css';
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Header from './Components/Header'
import RepoList from './Components/RepoList'
import OwnerRepoList from './Components/OwnerRepoList'
function App() {


  return (
    <>
      
         <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/owner/:owner" element={<OwnerRepoList />} />
        </Routes>
        <Footer />
      </Router>
     
    </>
  )
}

export default App

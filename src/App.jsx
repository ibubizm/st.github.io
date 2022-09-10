import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Profile } from './pages/ProfilePage/Profile'
import { News } from './pages/newsPage/News'
import { Main } from './pages/Main/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

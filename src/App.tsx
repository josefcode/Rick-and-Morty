import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPages'
import CardDetails from './components/card/card-details/cardDetail'

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200">
        <ul className="flex justify-center items-center">
          <li>
            <Link to="/" className="">
              <img
                className="w-20 h-20"
                src="https://morty-smith.netlify.app/static/media/Logo.f5e1157c.png"
                alt="logo"
              />
            </Link>
          </li>
          <div className="ml-auto flex">
            <li>
              <Link to="/" className="text-xl">
                Home
              </Link>
            </li>
            <li className="ml-4">
              <Link to="/favorites" className="text-xl">
                Favorites
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/detail/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

export default App

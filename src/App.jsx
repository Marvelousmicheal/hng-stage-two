import Home from "./pages/Home"
import MoviesDetails from "./pages/MoviesDetails"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
 
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviesDetails />} />
      </Routes>
    </Router>
      
     
      )
}

export default App

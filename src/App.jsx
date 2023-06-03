import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home} from './pages';
import { Footer } from './components';

function App () {
  return (
  <Router>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </div>
  </Router>

  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import CacheBuster from 'react-cache-buster'
import { Home, OurWork, Services, WorkItem } from './pages';
import { Navbar, Footer } from './components';
import { HelmetProvider } from 'react-helmet-async'
import { version } from '../package.json'

const Spinner = loadable(() => import('./helpers/Spinner'))

function App() {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={true}
      isVerboseMode={false}
      loadingComponent={<Spinner />}
      metaFileDirectory={'.'}
    >
      <HelmetProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/OurWork" element={<OurWork />} />
              <Route path="/OurWork/:id" element={<WorkItem />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </CacheBuster>
  )
}

export default App
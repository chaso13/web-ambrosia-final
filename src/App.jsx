import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import CacheBuster from 'react-cache-buster'
import { Home } from './pages';
import { Footer } from './components';
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
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </CacheBuster>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import CacheBuster from 'react-cache-buster'
import { Home, OurWork, Services, WorkItem, Pricing } from './pages';
import { Navbar } from './components';
import { HelmetProvider } from 'react-helmet-async'
import { version } from '../package.json'

const Footer = loadable(() => import('./components/Footer'))
const ContactButton = loadable(() => import('./components/ContactButton'))
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
              <Route path="/Pricing" element={<Pricing/>} />
              <Route path="/OurWork" element={<OurWork />} />
              <Route path="/OurWork/:id" element={<WorkItem />} />
            </Routes>
            <Footer />
            <ContactButton />
          </div>
        </Router>
      </HelmetProvider>
    </CacheBuster>
  )
}

export default App
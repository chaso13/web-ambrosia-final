
import styles from './style';
import { Home, About, Contact, Navbar, OurWork, Footer} from './components';


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
    
      <div className={`${styles.paddingX} ${styles.flexLeft}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
          <Navbar/>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Home/>
        </div>
          
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact/>
          <OurWork/>
          <About/>
          <Footer/>
        </div>
      </div>

    </div>
  );


export default App

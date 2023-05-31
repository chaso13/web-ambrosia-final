
import styles from './style';
import { Home, About, Contact, Navbar, OurWork, Footer, Companies, ContactButton} from './components';


const App = () => (
    <div className=" w-full overflow-hidden">
    
      <div className={`${styles.paddingX} ${styles.flexLeft}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
          <Navbar/>
      </div>
        <ContactButton/>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Home/>
        </div>
          
      </div>
      <Companies/>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About/>
          <Contact/>
          <OurWork/>
          <Footer/>
        </div>
      </div>

    </div>
  );


export default App

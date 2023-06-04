import styles from '../style'
import { Hero, About, Contact, OurWork, Companies, ContactButton, Pricing } from '../components'

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexLeft}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>
      <ContactButton />
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <Companies />
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Pricing/>
          <Contact />
          <OurWork />
        </div>
      </div>
    </div>
  )
}

import {webDevelopment,mobileDevelopment,SEO } from '../assets';
import styles, {layout} from '../style';


const About = () => (
  <section id='about' >
    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={webDevelopment} alt='web development' className='w-[40%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Website design <br className='sm:block hidden'/> and development.  </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team brings your digital vision to life with our top-of-the-line web development services. We are dedicated to creating stunning, functional, and user-friendly websites that leave a lasting impression on your audience.
            </p>
        </div>
    </div>

    <div className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Top-notch <br className='sm:block hidden'/> SEO services. </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Unlock your website's full potential with our top-notch SEO services. At Web Ambrosia, we offer a comprehensive range of solutions tailored to enhance your online presence and drive organic traffic to your site.
            </p>
        </div>
        
        <div className={layout.sectionImgReverse}>
            <img src={SEO} alt='search engine optimization' className='w-[40%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div> 
    </div>

    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={mobileDevelopment} alt='mobile development' className='w-[40%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Mobile first<br className='sm:block hidden'/> design language. </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Mobile first development is crucial, in the modern world. Nearly 92.3% of internet users access the internet using a mobile phone. We are here to make sure your website looks stunning on any device from a laptop to a smartphone.
            </p>
        </div>
    </div>
    
  </section>
)

export default About;
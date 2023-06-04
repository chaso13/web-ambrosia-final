import { svgLaptop,svgMobile, svgTablet} from '../assets';
import styles, {layout} from '../style';

const Pricing = () => {
    <section>
     <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={svgTablet} alt='web development' className='w-[50%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Standard Sites</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Are you looking to elevate your professionalism without requiring any extravagant website features? Our approach combines business experience, design expertise, and a strategic mindset to create websites that work like magic. Whether its generating leads, driving sales, or simply facilitating in-person selling, we have the skills to make it happen.
            </p>
            <h2> Range: </h2>
            <h2> $7,500 to $30,000 </h2>
        </div>
    </div>

    <div className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Complex Sites </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Looking beyond the limitations of a basic brochure website, certain sites require more substantial functionality. Whether its e-commerce stores, membership platforms, learning systems, online courses, or anything else, when your website is your business, our expertise in development ensures that your business operates seamlessly as intended!
            </p>
            <h2> Range: </h2>
            <h2> $35,000 to $70,000 </h2>
        </div>
        
        <div className={layout.sectionImgReverse}>
            <img src={svgLaptop} alt='search engine optimization' className='w-[60%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div> 
    </div>

    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={svgMobile} alt='mobile development' className='w-[40%] relative z-[5]'/>
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
}

export default Pricing
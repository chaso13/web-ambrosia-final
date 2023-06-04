import { svgLaptop,svgMobile, svgTablet} from '../assets';
import styles, {layout} from '../style';

export default function Pricing(){
    return(
    <section >
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={svgTablet} alt='web development' className='w-[50%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Branding</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Your brand encompasses so much more than a mere logo. It embodies your true essence, your powerful message, and the irresistible appeal that draws visitors to collaborate with you. Luckily, our team excels at capturing and conveying that essence flawlessly. Our basic package, which includes strategy, logo design, and a comprehensive style guide, starts at $10k. However, pricing may increase based on the level of strategy and additional assets required.
            </p>
            <h2> Range: </h2>
            <h2> $10,000 to $30,000 </h2>
        </div>
    </div>

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
            <h2> $10,000 to $30,000 </h2>
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
            <img src={svgTablet} alt='web development' className='w-[50%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Photography </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our Premium Photography Packages are meticulously crafted to fulfill all your photography needs with exceptional quality and creativity. This service encompasses professional, high-resolution photoshoots perfect for personal, commercial, or corporate use.
            </p>
            <h2> Range: </h2>
            <h2> $1,800 to $3,600 </h2>
        </div>
    </div>

    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={svgMobile} alt='mobile development' className='w-[40%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> Website Copy</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Professional copywriting is the key differentiator between visually appealing websites and truly impactful ones. We will extract all the rich goodness from your mind dont worry, it wont hurt, we promise and transform it into compelling words that inspire your visitors to take action.
            </p>
            <h2> Cost: </h2>
            <h2> $300 per page </h2>
        </div>
    </div>

    <div className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={svgMobile} alt='mobile development' className='w-[40%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-gradient`}> SEO</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            If youre seeking to expand your online business, SEO can revolutionize your lead generation. Our team is dedicated to adhering to proper guidelines to elevate your sites rankings, without resorting to shortcuts.
            </p>
            <h2> Range: </h2>
            <h2> $2,000 to $3,500 per/month </h2>
        </div>
    </div>
    </div>
    </div>

    </section>

)}

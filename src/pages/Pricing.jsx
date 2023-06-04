import { svgLaptop,svgMobile, svgTablet, svgPricing} from '../assets';
import styles, {layout} from '../style';


export default function Pricing(){
    return(
    
    <section >
    <div className={`${styles.paddingX}`}>
    <div className={`${styles.boxWidth}`}>
    
    {/*Hero section start for Pricing */}
    <div className='flex md:flex-row flex-col'>
    <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 py-10 z-[10] min-h-[100vh] pt-[40vh]`}>
      <div className='flex flex-row justify-center items-center w-full'>
      
        <h1 className='flex-1 font-crimsonPro font-semibold ss:text-[4.5rem] text-[4.5rem] text-primary animate-fade-in'> Our Pricing
        </h1>
        
      </div>
      <div className=' ml-[-25px] mt-[-45px] w-[3rem] h-[3rem] bg-[#107bdf] rounded-[100%] z-[-1] absolute flex justify-center items-start whitespace-nowrap'></div>
     
      <p className={` font-Jost text-[22px] max-w-[470px] text-primary pl-[150px] pt-[60px] pb-[10px] animate-fade-in inline-block`}>
      Pricing doesnt have to be complicated. Lets explore the possibilities together.
      </p>
    </div>
    

    <div className={`${layout.sectionImgReverse}`}>
            <img src={svgPricing} alt='budget' className='w-[75%] md:ml-[10vw] relative z-[5]'/>
            <div  className='absolute z-[9]  min-h-[75%] min-w-[100%] rounded-[100%] bg-[#107bdf22] left-0 right-0 md:ml-[5vw] animate-floater '/>
    </div>
   

    </div>
   
    {/*Budget Section */}

    <div className={layout.section}>
       

        <div className={layout.sectionInfo}>
            <h3> Budget does not matter</h3>
            <h2 className={`${styles.heading2} text-gradient`}> unless there is a return on investment</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            While your budget is important, what matters even more is obtaining a website that effectively achieves your goals and generates a positive return on investment. <br className='sm:block hidden'/>
            Thats why, at Thrive, our primary focus is on strategy and ensuring your project aligns with your sales and marketing efforts. If we believe we cannot generate a substantial return on investment, we will not undertake your project.
            </p>
        </div>

        <div className={layout.sectionImgReverse}>
            <img src={svgTablet} alt='budget' className='w-[50%] relative z-[5]'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
            <div  className='absolute z-[3] left-1/2 top-0 w-[50%] rounded-full pink__gradient'/>
        </div>
    </div>
    

    {/* Pricing components section start */}

    <div className=''>
        <h3 className='text-gradient text-[22px] flex justify-center'> Price indicators</h3>
        <h2 className={` text-[40px] flex justify-center font-crimsonPro`}> a rough idea of the required investment</h2>
        <div className='flex justify-center'>
            
            <p className='max-w-[470px] mt-5'>
            We provide customized fixed prices for each project, tailored to the specific needs of the client, where we are confident in generating a positive return. However, its always helpful to have an idea of what to expect, right? To provide some clarity, we have compiled a general pricing guideline for your reference.
            </p>
        </div>
    </div>
    {/* Branding Price */}
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

    {/* Standard Sites Price */}

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

    {/* Complex Sites Price */}


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

    {/* Photography Price */}


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

    {/* Website Copy Price */}

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

    {/* SEO Price */}

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

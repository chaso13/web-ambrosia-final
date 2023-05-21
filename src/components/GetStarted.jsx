
import styles from '../style';
import {arrowUp} from '../assets';

const GetStarted = () => (

  <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full mr-[220px] hover:w-[170px] hover:h-[170px] bg-blue-gradient p-[2px] cursor-pointer hover:bg-black`}>
    <div className={`${styles.flexCenter} flex-col bg-white hover:bg-black  text-black hover:text-white w-[100%] h-[100%] rounded-full `}>
      <div className={` ${styles.flexStart} flex-row`}>
        <p className='font-sansserif font-medium text-[18px] leading-[23px] mr-2'>
          <span>Get</span>
        </p>
        <img src={arrowUp} className='w-[23px] h-[23px] object-contain ' alt='arrow'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span>Started</span>
        </p>
    </div>
  </div>
  
)

export default GetStarted
import styles from '../style';
import { contactSVG} from '../assets';


const ContactButton = () => {
  return (
    <div className={`${styles.flexCenter} rounded-full h-[65px] w-[65px] bg-[#3C1D97] hover:bg-purple-700 fixed bottom-6 right-6 z-10 content-center`}>
        <div className='fill-white'>
            <img src={contactSVG}/>
        </div>
    </div>
  )
}

export default ContactButton
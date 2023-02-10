import style from './main-Top.module.scss'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import Image from 'next/image'



const MainTop = () => {
  return (
    <div className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.circle}></div>
        <div className={style.circle2}></div>
        <div className={style.circle3}></div>
        <Image
        src='/assets/Star.png'
        alt='star'
        width={32}
        height={40}
        className={style.star1}
        />
          <Image
        src='/assets/arrow.svg'
        alt='star'
        width={57}
        height={126}
        className={style.arrow}
        />
        
         <Image
        src='/assets/Star.png'
        alt='star'
        width={32}
        height={40}
        className={style.star2}
        />
         <Image
        src='/assets/Star.png'
        alt='star'
        width={48}
        height={64}
        className={style.star3}
        />
         <Image
        src='/assets/Star.png'
        alt='star'
        width={48}
        height={64}
        className={style.star4}
        />
          

        
        <div className={style.mainHeader}>
          <h1>Turn your best customers <br/>into<span style={{color: 'rgba(189, 59, 210, 0.94)'}}> Loyal fans</span></h1>
        </div>

        <div className={style.maintext}>
          <p>Get ready to revolutionize the way you interact with your customers 
            and drive sales with<br/> Loyalbaze. Join the waiting list now to be among the 
            first to experience the future of <br/> customer loyalty.
          </p>
        <div/>

          <form>
            <div className={style.inputForm}>
              <BsPersonCircle />
              <input placeholder='Tell us your name' type="text" />
            </div>
            <div className={style.inputForm}>
              <AiOutlineMail />
              <input placeholder='Enter your email address' type="email" />
            </div>
            <button>Get early access</button>
          </form>

        
            <div className={style.accountsIcon}>
              <div className={style.account}>G</div>
              <div className={style.account2}>O</div>
              <div className={style.account}>U</div>
              <div className={style.account2}>M</div>
              <span>+57 Joined</span>
            </div>

      </div>   
    </div>
  </div>
  )
}

export default MainTop
import Image from 'next/image'
import style from './Main-Bottom.module.scss'

export const MainBottom = () => {
  return (
    <div className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.left}>
          <div className={style.circle}></div>
      <Image
        src='/assets/Star.png'
        alt='star'
        width={48}
        height={64}
        className={style.star1}
        />
          <Image
        src='/assets/Star.png'
        alt='star'
        width={48}
        height={64}
        className={style.star2}
        />

      <Image
        src='/assets/Line.svg'
        alt='star'
        width={169}
        height={64}
        className={style.line}
        />
          <div className={style.mainHeader}>
            <h1>What we do</h1>
          </div>
          <div className={style.maintext}>
            <p>
            Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business.
            </p>
          </div>
        </div>  
        <div className={style.right}>
        
          <form>
            <div className={style.formHeader}>
              <h1>Book a Consultation with us</h1>
            </div>
            <div className={style.inputForm}>
            <input
             placeholder='Enter your full name' 
             type="text" />
            </div>
              <div className={style.inputForm}>
              <input  
              placeholder='Enter your work email' 
              type="text" />
              </div>
               <div className={style.inputForm}>

            <input  
            placeholder='Mobile number' 
            type="text" />
              </div>
             <div className={style.inputForm}>

            <input 
             placeholder='Company Name' 
             type="text" />
              </div>
              <div className={style.inputForm}>
            <select>
              <option value=''>Country</option>
            </select>
              </div>
            <div className={style.inputForm2}>
              <input  
              placeholder='Drop a message.....' 
              type="text" />
              </div>
            <button>Send Request</button>
          </form>
        </div>
      </div>
    </div>  
  )
}

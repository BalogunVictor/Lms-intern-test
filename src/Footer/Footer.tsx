import style from './Footer.module.scss'
import {GiDogHouse} from 'react-icons/gi'
import {FiPhoneCall} from 'react-icons/fi'

export const Footer = () => {

  return (
    <div className={style.footer}>
      <hr />
      <div className={style.footerWrapper}>
        <div className={style.address}>
          <GiDogHouse />
          <span>2nd Floor, The Garnet Building, KM14<br/>Lekki Epe Expressway, Lagos, Nigeria.</span>
        </div>
        <div className={style.motto}>
          <span>Loyalbaze is almost here.</span>
        </div>
        <div className={style.phone}>
          <FiPhoneCall />
          <span>+234 903 618 9485</span>
        </div>
      </div>
    </div>
  )
}

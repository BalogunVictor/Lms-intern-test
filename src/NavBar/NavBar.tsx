import Image from 'next/image'
import style from './NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarWrapper}>
        <div className={style.left}>
          <div className={style.logo}>
            <h1>L</h1>
            <Image 
            src="/assets/love.svg"
             alt="/" 
             width={43}
             height={30}
             style={{padding: '0px 1px'}}
             /> 
             <h1>yalbaze</h1>
          </div>
        </div>
        <div className={style.right}>
          <button className={style.btn}>
          Request a call
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
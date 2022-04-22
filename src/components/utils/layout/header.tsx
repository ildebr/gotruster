import LinkB from "./link";
import { Logo } from "svg";
import {useState} from 'react';
import styles from "./styles.module.scss";
function Header(): JSX.Element {
  const [show, setShow] = useState('');

  function toggle(){
  console.log("entro")
    if(show === ''){
      setShow('show');
    }
    else{
      setShow('')
    }
  }

  return (
    <div className={`${styles.header} `}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
          <span>Truster</span>
        </div>

        <div className={`${styles.logo} ${styles.light}`}>
          <img src="/light-mode/logo_light.svg" alt="logo light" />
          <span>Truster</span>
        </div>

        <div>
          <img onClick={toggle} src="/details/menu.svg" className={`${styles.hamburguer}`} alt="menu svg" />
          <img onClick={toggle} src="/light-mode/menu_light.svg" className={`${styles.hamburguer} ${styles.light}`} alt="menu light svg" />
          <div  className={`${styles.displaymenu} ${show}`}>
            <div>
              <a href="#" className={styles.navlink}>Ingresar </a>
              <a href="#" className={styles.navlink}>Crear</a>
            </div>
            <a href="#">Nosotros</a>
            <a href="#">Negocios</a>
            <a href="#">Plataforma</a>
          </div>
        </div>


        <div className={styles.menu}>
          <a href="#" className={styles.navlink}>Ingresar </a>
          <a href="#" className={styles.navlink}>Crear</a>

        </div>
      </div>
    </div>
  );
}

export default Header;

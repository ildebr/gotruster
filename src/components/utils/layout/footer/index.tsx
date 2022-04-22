import styles from './styles.module.scss'
import { Logo } from 'svg'
function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <header>
	        <h2>Contactanos</h2>
	        <h2><span>info@gotruster.com</span></h2>
        </header>

        <div className={styles.fillerline}></div>

        <div className={styles.footerbottom}>
        	<div>
            <img src="/logo.svg" alt="truster logo" />

            <div className={styles.logoContainer}>
              <img src="/details/facebook.svg" alt="facebook" />
              <img src="/details/twitter.svg" alt="twitter" />
              <img src="/details/instagram.svg" alt="instagram" />
            </div>
          </div>

        	<div className={styles.footertext}>
        		<a href="#">Terminos y condiciones</a>
        		<div className={styles.pointbreak}></div>
        		<a href="#">Politicas de Privacidad</a>
        		<div className={styles.pointbreak}></div>
        		<a href="#">Servicio Tecnico</a>
        	</div>
        </div>
      </div>
    </div>
  )
}
export default Footer

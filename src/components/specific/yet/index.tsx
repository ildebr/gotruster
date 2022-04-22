import styles from './styles.module.scss'
function Yet(): JSX.Element {
  return (
    <div className={styles.yet}
    style={{backgroundImage:`url(/hero/slide5-background.jpg)`}}
    >
      <div className={styles.content}>
        <h1>¿Todavía no estás ganango puntos?<br /><span>Creá tu pérfil.</span></h1>        
      </div>
    </div>
  )
}
export default Yet
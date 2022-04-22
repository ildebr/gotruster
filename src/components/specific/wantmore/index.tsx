import styles from './styles.module.scss'
function Wantmore(): JSX.Element {
  return (
    <div className={styles.wantmore}
    style={{backgroundImage:`url(/hero/slide4-background.jpg)`}}
    >
      <div className={styles.content}>
        <h1>Quiero más clientes, <span>quiero más info</span></h1>

        <form>
          <input type="email" placeholder="Escribi tu email aqui" />

          <button>Enviar</button> 
        </form>
      </div>
    </div>
  )
}
export default Wantmore

import styles from "./styles.module.scss";
function Try(): JSX.Element {
  return (
    <div className={styles.try} >
      <img src="/logo.svg" className={styles.dark} alt="logo" />
      <img src="/light-mode/logo_light.svg" className={styles.light} alt="logo" />
      <h2 className="styles.title-secondary">
        Probá Truster. Empezá hoy.
      </h2>

      <form>
        <fieldset> 
          <input type="text" name="name" placeholder="Nombre" />
          <input type="text" name="lastname" placeholder="Apellido" />
          <input type="email" name="email" placeholder="Email" />
          <button>Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}
export default Try;
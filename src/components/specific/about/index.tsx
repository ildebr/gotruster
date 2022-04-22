import styles from "./styles.module.scss";
import Button from "components/utils/inputs/button";
function About() {
  return (
    <div className={styles.about}  id="about">
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>Posicionate en truster</h1>
        </div>
        <div className={styles.vantages}>
          <div className={styles.point}>
            <img src="/details/shaking-hands.svg" className={styles.dark} alt="shaking hands" />
            <img src="/light-mode/hands.svg" className={styles.light} alt="shaking hands" />
            <h2>Construí reputación</h2>
            <p>
              Registrate e ingresá los datos solicitados. Todo lo bueno que
              hacés y está desparramado en valoraciones en la web, tus futuros
              clientes lo encontrarán en un solo lugar, convertido en puntos
              Truster.
            </p>
          </div>
          <div className={styles.point}>
            <img src="/details/rocket.svg" className={styles.dark} alt="rocket" />
            <img src="/light-mode/Rocket.svg" className={styles.light} alt="rocket" />
            <h2>Publicá gratis tu servicio</h2>
            <p>
              Truster no es un sitio de clasificación más. Se diferencia por validar la información de tu negocio y recopilar las valoraciones de usuario de otras plataformas para generar un sistema de puntaje propio.
            </p>
          </div>
          <div className={styles.point}>
            <img src="/details/share.svg" className={styles.dark} alt="share icon" />
            <img src="/light-mode/share.svg" className={styles.light} alt="share icon" />
            <h2>Tenés Truster, te tienen confianza</h2>
            <p>
              Compartí tu reputación Truster como una referencia de confiabiidad para cualquier tipo de operatoria que hagas.
            </p>
          </div>
          <div className={styles.point}>
          <img src="/details/shield.svg" className={styles.dark} alt="shield svg" />
          <img src="/light-mode/shield.svg" className={styles.light} alt="shield svg" />
            <h2>Lo que ya hacés, vendelo mejor.</h2>
            <p>
              Potencia tu negocio, dándote a conocer con el aval de Truster, y llegá más clientes, asegurando transacciones confiables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

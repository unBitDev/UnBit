import Image from 'next/image';

import Banner from "../src/elements/Banner";
import styles from '../styles/pages/home.module.css'

const Index = async () => {
  return <>
     <Banner backgroundImage="/img/placeholders/bannerDesktop.png" title="Bienvenidos a UnBit" subtitle="Un bit a la vez" />
     <div className={styles.container}>
        <div className={styles.containerContent}>
          <section>
            <p className={styles.introduction}>UnBit es un blog donde podrás encontrar varios
              Posts de programación de frameworks favoritos y curiosidades
              sobre ellos, así como varios tutoriales explicados desde cero
              para que te conviertas en un verdadero experto.</p>
          </section>
          <section className={styles.aboutUs}>
            <h4 className={styles.titleAboutUs}>Quien Soy?</h4> 
            <div className={styles.containerAboutUs}>
              <Image src="/img/placeholders/perfil.jpeg" alt="" width={500} height={500} className={styles.image} />
              <p className={styles.description}>
                Hola! Soy <strong>Ezequiel</strong> me dicen "Zetta" un desarollador Frontend y estudiante de Desarollo de Video juegos.
                Comenze este blog para compartir mis conocimientos y dia al dia como desarrollador con ustedes,
                trabajo como Frontend Developer hace mas de 4 años y a lo largo de mi corta carrera como dev me
                encontre con muchos retos que supere y me encantaria contarte como hice eso.
                <br />
                <br />
                Espero que les guste el sitio y puedan divertirse aprendiendo y leyendo como yo me divierto escribiendo
                y creando este blog.
                <br />
                <br />
                <br />
                <br />
                Saludo su amigo <strong>Zetta!</strong>
              </p>
            </div>
          </section>
        </div>
     </div>
  </>
}

export default Index;

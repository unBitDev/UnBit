import Image from 'next/image';
import Container from '../src/components/Container';

import Banner from "../src/elements/Banner";
import styles from '../styles/pages/home.module.css'

const Index = async () => {
  return <div className="mb-24 max-md:mb-2">
    <Banner backgroundImage="/img/placeholders/bannerDesktop.png" title="Bienvenidos a UnBit" subtitle="Un bit a la vez" /> 
     <Container>
        <section className="py-10 max-md:py-5">
          <p className="text-4xl max-md:text-xl">UnBit es un blog donde podrás encontrar varios
            Posts de programación de frameworks favoritos y curiosidades
            sobre ellos, así como varios tutoriales explicados desde cero
            para que te conviertas en un verdadero experto.</p>
        </section>
        <section className="grid justify-items-center mb-8">
          <h4 className="text-5xl mb-10 max-md:text-4xl">Quien Soy?</h4> 
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:grid-rows-[35%_1fr]">
            <Image src="/img/placeholders/perfil.jpeg" alt="" width={500} height={500} className={styles.image} />
            <p className="text-2xl max-md:text-xl">
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
              Saludo su amigo <strong>Zetta!</strong>
            </p>
          </div>
        </section>
     </Container> 
  </div>
}

export default Index;

import Image from 'next/image';

import Banner from "../src/elements/Banner";
import styles from '../styles/pages/home.module.css'

import Container from '../src/components/Container';

const Home = async () => {
  return <div className="mb-24 max-md:mb-2">
    <Banner backgroundImage="/img/banner.jpeg" title="Bienvenidos a UnBit" subtitle="Un bit a la vez" sx="text-white" /> 
     <Container>
        <section className="py-10 max-md:py-5">
          <p>UnBit es un blog donde podrás encontrar varios Posts de programación de frameworks favoritos y curiosidades sobre ellos, así como varios tutoriales explicados desde cero para que te conviertas en un verdadero experto.</p>
        </section>
        <section className="grid justify-items-center mb-8">
          <h4 className="text-5xl mb-10 max-md:text-4xl">Quien Soy?</h4> 
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:grid-rows-[35%_1fr]">
            <Image src="/img/placeholders/perfil.jpeg" alt="" width={500} height={500} className={styles.image} />
            <p className="text-xl">
            Hola! Soy <span className="font-bold">Ezequiel</span> me dicen <span className="font-bold italic">"Zetta"</span> un desarollador Frontend y estudiante de Desarollo de Video juegos. Comenze este blog para compartir mis conocimientos y dia al dia como desarrollador con ustedes, trabajo como Frontend Developer hace mas de 4 años y a lo largo de mi corta carrera como dev me encontre con muchos retos que supere y me encantaria contarte como hice eso.

            Espero que les guste el sitio y puedan divertirse aprendiendo y leyendo como yo me divierto escribiendo y creando este blog.

            Saludo su amigo <span className="font-bold">Zetta!</span>
            </p>
          </div>
        </section>
     </Container> 
  </div>
}

export default Home;

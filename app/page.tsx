import { notFound } from 'next/navigation';
import Image from 'next/image';

import Banner from "../src/elements/Banner";
import { HomeResponse } from '../src/types/api/home';
import styles from '../styles/pages/home.module.css'

import Container from '../src/components/Container';
import RichText from '../src/components/RichText';
import { defaultHomeInfo } from './defaultHomeInfo';

async function getInfoHome() {
  const res = await fetch(`${process.env.HOST}/api/home`);
  if(!res.ok) throw new Error('Failed to fetch data home');
  return res.json();
}

const Home = async () => {
  let infoHome: HomeResponse = defaultHomeInfo;

  try {
    infoHome = await getInfoHome();
  } catch(e) {
    console.error(e);
    notFound()
  }

  return <div className="mb-24 max-md:mb-2">
    <Banner backgroundImage={infoHome.banner} title={infoHome.title} subtitle={infoHome.subtitle} sx="text-white" /> 
     <Container>
        <section className="py-10 max-md:py-5">
          <RichText content={infoHome.shortBlogDescription.json} links={infoHome.shortBlogDescription.links} />
        </section>
        <section className="grid justify-items-center mb-8">
          <h4 className="text-5xl mb-10 max-md:text-4xl">Quien Soy?</h4> 
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:grid-rows-[35%_1fr]">
            <Image src="/img/placeholders/perfil.jpeg" alt="" width={500} height={500} className={styles.image} />
            <RichText content={infoHome.whoIAm.json} links={infoHome.whoIAm.links} />
          </div>
        </section>
     </Container> 
  </div>
}

export default Home;

import Image from 'next/image';

export type BannerProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

const Banner = ({ backgroundImage, title, subtitle }: BannerProps) => {
  return <div className="flex relative justify-center h-[15rem] max-md:h-[10rem]">
    <h2 className="absolute text-5xl top-[30%] font-bold max-md:top-[25%] max-md:text-4xl">{title}</h2>
    {subtitle && <h5 className="absolute text-3xl top-[50%] max-md:top-[48%] max-md:text-2xl">{subtitle}</h5>}
    <Image src={backgroundImage} alt={`Image Banner ${title}`} width={1280} height={300} className="w-full object-cover" />
  </div>
}

export default Banner;

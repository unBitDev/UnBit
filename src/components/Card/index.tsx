import Link from 'next/link';
import BaseCard from './BaseCard';

type CardProps = {
  image: string;
  title: string;
  shortDescription: string;
  publicationDate: string;
  href?: string;
  linked?: boolean
}

const Card = ({ image, title, shortDescription, publicationDate, linked, href }: CardProps) => {
  return linked && href ?
    <Link  href={href}>
      <BaseCard image={image} title={title} shortDescription={shortDescription} publicationDate={publicationDate} />
    </Link>
  :
    <BaseCard image={image} title={title} shortDescription={shortDescription} publicationDate={publicationDate} /> 
}

export default Card;

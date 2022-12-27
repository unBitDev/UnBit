import Image from "next/image";
import { styles } from "./styles";

type BaseCardProps = {
  image: string;
  title: string;
  shortDescription: string;
  publicationDate: string;
}

const BaseCard = ({ title, image, shortDescription, publicationDate }: BaseCardProps) => {
  return (
    <div className={styles.cardContainer}> 
      <Image className={styles.cardImage} src={image} width={100} height={100} alt={title} />
      <div className="p-5">
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardDescription}>{shortDescription}</p> 
        <p className={styles.cardDate}>{publicationDate}</p> 
      </div>
    </div>
  )
}

export default BaseCard;

import styles from '../ProjectCard/ProjectCard.module.css';
import Image from "next/image";
import projects from "../../data/projects"

export default function ProjectCard({ image, width, height, alt, name, date, id }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className={styles.projectCard}
        id={id}
      />
      <div className={styles.overlay}></div>
      
      <div className={styles.captionContainer}>
        <p>{name}</p>
        <p >{date}</p>
      </div>
    </div>
  );
}

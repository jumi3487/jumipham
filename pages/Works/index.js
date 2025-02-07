import { useState } from "react";
import Head from "next/head";
import projects from "../../data/projects";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import Image from "next/image";
import styles from "../../styles/Works.module.css";
import Footer from "../../components/Footer";
import Link from 'next/link';

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("Projects");

  const categories = ["Projects", "Graphic Designs", "Motion Graphics", "Others"];

  // ✅ Filtering logic (Only shows "Projects" first)
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (

    <>
    <div className={styles.body}>
      <Head>
        <title>Works</title>
      </Head>

      <div>
        {/* Navbar */}
        <Header />

        {/* Title Section */}
        <div className={styles.container}>
          <section>
            <h1 className={styles.header}>Works</h1>
            <div className={styles.filters}>
              {categories.map((category, index) => (
                <span key={category}>
                  <button
                    className={selectedCategory === category ? styles.activeButton : styles.button}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                  {index !== categories.length - 1 && <span> / </span>} 
                </span>
              ))}
            </div>
          </section>

          {/* Project Grid */}
          <section className={styles.cardContainer}>
            {filteredProjects.map((project) => (
              <Link href={`/Works/${project.title}`} key={project.id} passHref>
              <ProjectCard
                image={project.image}
                width={project.width}
                height={project.height}
                name={project.name}
                date={project.date}
              />
            </Link>
            ))}
          </section>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.constructionContainer}>
          <Image
            src="/magician.svg"
            alt="Magic in Progress"
            width={150}
            height={150}
            priority
          />
          <h1 className={styles.title}>Magic in Progress</h1>
          <p className={styles.description}>
            Our magical team is conjuring up something special for you. Please check back soon!
          </p>
          <div className={styles.timeline}>
            <p>Expected completion: Coming Soon</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      </footer>
    </div>
  );
}

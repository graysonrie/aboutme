import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h2>About:</h2>
        <p>
          My name is Grayson, I am currently a student at UTT studying Computer
          Science (what a surprise.)
        </p>

        <p>
          My passion my whole life has always been video game design. Because it
          is really hard to get into the video game job market, I decided to
          channel my efforts towards software engineering. Many of my old game
          projects can be found on{" "}
          <a href="https://scratch.mit.edu/users/legobuzz12/" target="none">
            Scratch
          </a>
        </p>

        <p>
          I&apos;ve always been a fan of the music in video games, as I do feel
          they are sometimes underappreciated, and in my humble opinion, they
          are much better than any of the mainstream songs of our current
          generation.
        </p>

        <p>
          Throughout the past 4 years, I taught myself music theory and have
          created over 150 unique music tracks. A few of them can be found on my{" "}
          <a href="https://www.youtube.com/@Legobuzz12" target="none">
            YouTube channel
          </a>
        </p>
      </div>
    </div>
  );
}

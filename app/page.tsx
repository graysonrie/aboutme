import styles from "./page.module.css";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Goals from "./components/goals/goals";

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Skills />
      <Goals />
    </div>
  );
}

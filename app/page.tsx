import styles from "./page.module.css";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Goals from "./components/goals/goals";
import TopDash from "./components/topdash/topdash";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopDash/>
      <About />
      <Skills />
      <Goals />
    </div>
  );
}

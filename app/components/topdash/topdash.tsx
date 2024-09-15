import ModeToggle from "./components/modetoggle/modetoggle";
import styles from "./topdash.module.css";

export default function TopDash() {
  return (
    <div className={styles.content}>
      <h1>About Me</h1>
      <ModeToggle />
    </div>
  );
}

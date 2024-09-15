import styles from "./skills.module.css";

export default function Skills() {
  return (
    <div className={styles.content}>
      <h2>Tech Experience:</h2>

      <div className={styles.list}>
        <p>C# - 1 year</p>
        <p>WPF - 8 months</p>
        <p>Python - 6 months</p>
        <p>Machine Learning - 6 months</p>
        <p>React + TypeScript - 1 month</p>
      </div>

      <div className={styles.sep} />

      <h2>Novelties:</h2>
      <h3>
        Tech areas I have tooled around with and enjoy using, but never gone
        into great detail with
      </h3>

      <div className={styles.list2}>
        <p>Rust</p>
        <p>C++ / C</p>
        <p>CUDA kernels</p>
      </div>
    </div>
  );
}

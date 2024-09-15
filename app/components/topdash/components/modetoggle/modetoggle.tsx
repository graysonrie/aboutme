"use client";
import { useEffect, useState } from "react";
import styles from "./modetoggle.module.css";

export default function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if the user has a stored preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // If no saved preference, detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={toggleTheme} />
      <span className={styles.slider}></span>
    </label>
  );
}

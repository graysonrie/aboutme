import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const themeScript = `
    (function() {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
      } else {
        document.documentElement.classList.add(userPrefersDark ? 'dark' : 'light');
      }
    })();
  `;

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </body>
    </Html>
  );
}

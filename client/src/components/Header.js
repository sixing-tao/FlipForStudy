import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Flip for Study</h1>
    </header>
  );
}

export default Header;

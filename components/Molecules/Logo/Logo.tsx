import Link from "next/link";

import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <img alt="Logo" src="/images/logo.webp" />
      </div>
    </Link>
  );
}

export default Logo;

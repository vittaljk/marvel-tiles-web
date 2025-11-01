import Link from "next/link";

import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <img alt="Logo" src="/images/Marvel-Tiles-Logo-3 (1).webp" />
      </div>
    </Link>
  );
}

export default Logo;

import PropTypes from "prop-types";
import { ReactNode } from "react";

import { Head } from "../head";

import styles from "./Layout.module.scss";

import * as Organisms from "@/components/Organisms";

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <div
      className={styles.layoutContainer}
    >
      <Head pageTitle={pageTitle} />
      <Organisms.Header />
      <div>
        <div className={styles.contentContainer}>{children}</div>
        <div data-aos="fade-up"><Organisms.Footer /></div>
      </div>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
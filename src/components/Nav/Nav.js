import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Container from "../Container";
import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <Link href="/">
          <a className={styles.logoLink}>
            <img 
              src="https://sismapblog.wpcomstaging.com/wp-content/uploads/2022/10/橫pee-logo-1-2.gif" 
              alt="Play Eat Easy Logo" 
              className={styles.logo}
            />
          </a>
        </Link>
        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <FaShoppingCart />
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </span>
          </a>
        </p>
      </Container>
    </nav>
  );
};

export default Nav;
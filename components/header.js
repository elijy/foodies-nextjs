import Link from "next/link";

import logo from "@/assets/logo.png";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logo.src} alt="a plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

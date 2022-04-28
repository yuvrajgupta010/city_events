import Link from "next/link";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Brower All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

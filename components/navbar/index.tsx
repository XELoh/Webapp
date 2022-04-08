import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const LINK = [
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "Community",
      path: "/community",
    },
    {
      name: "Catalogue",
      path: "/catalogue",
    },
  ];

  const SUB_LINK = [
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Seller Dashboard",
      path: "/seller_dashboard",
    },
    {
      name: "Log Out",
      path: "/logout",
    },
  ];

  const { pathname } = useRouter();
  const [dropdownVisible, setDropDownVisible] = useState<boolean>(false);

  type NavAnchor = {
    path: string;
    children: ReactNode;
  };

  function NavAnchor({ path, children }: NavAnchor) {
    return (
      <Link href={path}>
        <a className={styles.menuItem}>{children}</a>
      </Link>
    );
  }

  function toggleDropdown() {
    setDropDownVisible(!dropdownVisible);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftPanel}>
        <Link href="/">
          <a className={styles.logo}>LOGO</a>
        </Link>

        <ul className={styles.menu}>
          {LINK.map(({ name, path }) => (
            <li key={path}>
              {path === pathname ? (
                <span className={styles.selected}>{name}</span>
              ) : (
                <NavAnchor path={path}>{name}</NavAnchor>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.rightPanel}>
        <img
          src="avatar.jpeg"
          className={styles.avatar}
          onClick={toggleDropdown}
        />
        <div
          className={`${styles.dropdown} ${dropdownVisible && styles.active}`}
        >
          <ul className={styles.menu}>
            {SUB_LINK.map(({ name, path }) => (
              <li key={path}>
                {path === pathname ? (
                  <span></span>
                ) : (
                  <NavAnchor path={path}>{name}</NavAnchor>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

import styles from "./sideBar.module.scss";
import { NavLink } from "react-router-dom";
type NavLinkRenderProps = {
  isActive: boolean;
};
const SideBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/"
        >
          Все темы
        </NavLink>
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/logicandthinking"
        >
          Логика и мышление
        </NavLink>

        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/riddles"
        >
          Загадки
        </NavLink>
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/puzzles"
        >
          Головоломки
        </NavLink>

        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/Theworldaroundus"
        >
          Окружающий мир
        </NavLink>

        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            isActive ? `${styles.active}` : `${styles["nav-link"]}`
          }
          to="/globetrotting"
        >
          Путешествия
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;

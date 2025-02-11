import { useContext, useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/user/user_dashboard.module.css';
import { FaMoon, FaStethoscope, FaSun } from 'react-icons/fa';


const User_dashboard: React.FC = () => {
    const data_theme = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menu, setMenu] = useState("");

    const Menu_oparetor = () => {
        switch (menu) {
            case "home":
                // return <Home />;
                return null;
            default:
                return null;
        }
    }
    const theme_data = useContext(ThemeContext);

    const changeTheme = () => {
        theme_data?.setTheme(theme_data?.theme === "light" ? "dark" : "light");
    };

    return (
        <div className={styles[`main_dashboard_${theme_data?.theme}`]}>

            {/* Light/Dark Mode Toggle Button */}
            <div className={styles.themebtn_area}>
                <button className={styles.toggle_btn} onClick={changeTheme}>
                    {theme_data?.theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            <div className={styles.menu_bar_icon} onClick={() => setSidebarOpen(true)}>
                <FaBars />
            </div>


            <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebar_open : ""}`}>

                <div className={styles.brand_area}>

                    <div className={styles.close_area} onClick={() => setSidebarOpen(false)}>
                        <IoCloseOutline />
                    </div>

                    <div className={styles.brand_logo}>
                        <FaStethoscope />
                    </div>

                    <p className={styles.brand_name}>
                        MediSched
                    </p>
                </div>

                <div className={styles.menu_area}>
                    <div className={styles.menu_item} onClick={() => { setMenu("home"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <IoMdHome />
                        </div>
                        <p>Home</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("profile"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <CgProfile />
                        </div>
                        <p>Profile</p>
                    </div>

                </div>
            </div>


            <div className={styles.main_content}>
                {Menu_oparetor()}
            </div>
        </div>
    );
};

export default User_dashboard;

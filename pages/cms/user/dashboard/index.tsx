import { useContext, useState } from 'react';
import { IoCreateSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import ThemeContext from '@/Theme/Themestate';
import { FaMoon, FaStethoscope, FaSun } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";
import styles from '@/styles/user/user_dashboard.module.css';
import CreateAppo from '../create';
import BookedAppo from '../booked';
import Calender from '../calender';
import Profile from '../profile';

const User_dashboard: React.FC = () => {
    const data_theme = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menu, setMenu] = useState("");

    const Menu_oparetor = () => {
        switch (menu) {
            case "1":
                return <CreateAppo />
            case "2":
                return <BookedAppo />
            case "3":
                return <Calender />
            case "4":
                return <Profile />
            default:
                return <Calender />
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
                    <div className={styles.menu_item} onClick={() => { setMenu("1"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <IoCreateSharp />
                        </div>
                        <p>Create appointment</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("2"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <IoIosBookmarks />
                        </div>
                        <p>Booked appointment</p>
                    </div>


                    <div className={styles.menu_item} onClick={() => { setMenu("3"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                            <SlCalender />
                        </div>
                        <p>Calender view</p>
                    </div>

                    <div className={styles.menu_item} onClick={() => { setMenu("4"); setSidebarOpen(false) }}>
                        <div className={styles.menu_icon}>
                        <FaUser />
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

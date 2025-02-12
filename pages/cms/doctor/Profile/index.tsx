import { useContext, useState } from 'react';
import Image from 'next/image';
import { RiUser3Line, RiMailLine, RiPhoneLine, RiLogoutBoxRLine } from 'react-icons/ri';
import styles from '@/styles/admin/dct_profile.module.css';
import guest_img from '@/public/guest2.jpg';
import cover_img from '@/public/cover_img2.jpg';
import ThemeContext from '@/Theme/Themestate';

const Doctor_Profile: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const theme_data = useContext(ThemeContext);

  return (
<div className={`${styles.main_dashboard} ${styles[`main_${theme_data?.theme}`]}`}>

      {/* Cover Image */}
      <div className={styles.profile_header}>
        <Image src={cover_img} alt="Cover" layout="fill" objectFit="cover" />
      </div>

      {/* Profile Picture */}
      <div className={styles.profile_pic}>
        <img src={guest_img.src} alt="Profile Picture" className={styles.profile_pic_img} />
      </div>

      {/* Profile Body */}
      <div className={styles.profile_body}>
        <div className={styles.profile_info_container}>
          <div className={styles.profile_item}>
            <RiUser3Line className={styles.icon} />
            <p className={styles.profile_name}>Ganesh Saha</p>
          </div>
          <div className={styles.profile_item}>
            <RiMailLine className={styles.icon} />
            <p>ganesh@example.com</p>
          </div>
          <div className={styles.profile_item}>
            <RiPhoneLine className={styles.icon} />
            <p>+91 12345 67890</p>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className={styles.btn_container}>
          <button className={styles.signout_btn} onClick={() => setShowModal(true)}>
            <RiLogoutBoxRLine className={styles.logout_icon} /> Sign Out
          </button>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      {showModal && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal}>
            <p className={styles.modal_text}>Are you sure you want to sign out?</p>
            <div className={styles.modal_buttons}>
              <button className={styles.confirm_btn} onClick={() => alert("Signed Out!")}>
                Yes
              </button>
              <button className={styles.cancel_btn} onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctor_Profile;

import styles from '@/styles/admin/admin_account.module.css';
import guest_img from '@/public/guest.jpg'
const Account: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.profileCard}>
                <img src={guest_img.src} alt="Admin Avatar" className={styles.avatar} />
                <h2 className={styles.name}>Admin Name</h2>
                <p className={styles.email}>admin@example.com</p>
                <p className={styles.phone}>+1234567890</p>
                <button className={styles.signoutButton}>Sign Out</button>
            </div>
        </div>
    );
};

export default Account;

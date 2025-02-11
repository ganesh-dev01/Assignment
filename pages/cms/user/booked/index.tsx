import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/user/booked.module.css';

const BookedAppo:React.FC= () => {
  const theme_data = useContext(ThemeContext);

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h4>booked appointment</h4>
    </div>
  )
  }
  
  export default BookedAppo
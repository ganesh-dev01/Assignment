import ThemeContext from '@/Theme/Themestate';
import { useContext } from 'react';
import styles from '@/styles/user/booked.module.css';

const BookedAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h4 className={styles.heading}>Booked Appointments</h4>
      <div className={styles.tableContainer}>
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Arjun Mehta</td>
              <td>2025-02-15</td>
              <td>10:30 AM</td>
              <td>General Checkup</td>
            </tr>
            <tr>
              <td>Dr. Priya Sharma</td>
              <td>2025-02-16</td>
              <td>02:00 PM</td>
              <td>Dental Consultation</td>
            </tr>
            <tr>
              <td>Dr. Rahul Verma</td>
              <td>2025-02-18</td>
              <td>04:45 PM</td>
              <td>Eye Examination</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedAppo;

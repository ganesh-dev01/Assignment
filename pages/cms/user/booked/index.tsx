import { useContext, useState } from 'react';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/user/booked.module.css';

const BookedAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);

  // State for modals
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const appointments = [
    { id: 1, doctor: "Dr. Arjun Mehta", date: "2025-02-15", time: "10:30 AM", purpose: "General Checkup" },
    { id: 2, doctor: "Dr. Priya Sharma", date: "2025-02-16", time: "02:00 PM", purpose: "Dental Consultation" },
    { id: 3, doctor: "Dr. Rahul Verma", date: "2025-02-18", time: "04:45 PM", purpose: "Eye Examination" },
  ];

  const handleUpdate = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowUpdateModal(true);
  };

  const handleDelete = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowDeleteModal(true);
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.purpose}</td>
                <td>
                  <button className={styles.updateButton} onClick={() => handleUpdate(appointment)}>Update</button>
                  <button className={styles.deleteButton} onClick={() => handleDelete(appointment)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Update Appointment</h4>
            <label>Doctor Name:</label>
            <input type="text" defaultValue={selectedAppointment.doctor} />
            
            <label>Appointment Date:</label>
            <input type="date" defaultValue={selectedAppointment.date} />

            <label>Appointment Time:</label>
            <input type="time" defaultValue={selectedAppointment.time} />

            <label>Purpose:</label>
            <input type="text" defaultValue={selectedAppointment.purpose} />

            <div className={styles.modalActions}>
              <button className={styles.updateButton}>Update</button>
              <button className={styles.closeButton} onClick={() => setShowUpdateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Confirm Delete</h4>
            <p>Are you sure you want to delete the appointment with <b>{selectedAppointment.doctor}</b>?</p>
            <div className={styles.modalActions}>
              <button className={styles.deleteButton}>Delete</button>
              <button className={styles.closeButton} onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedAppo;

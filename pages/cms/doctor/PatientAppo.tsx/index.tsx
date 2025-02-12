import { useContext, useState } from 'react';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/doctor/patientappo.module.css';

const PatientAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);

  // State for modals
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  // Additional state for decline modal
  const [postponeDate, setPostponeDate] = useState('');
  const [reason, setReason] = useState('');

  const appointments = [
    { id: 1, doctor: "Arjun saha", date: "2025-02-15", time: "10:30 AM", purpose: "General Checkup" },
    { id: 2, doctor: "Priya roy", date: "2025-02-16", time: "02:00 PM", purpose: "Dental Consultation" },
    { id: 3, doctor: "Aniket roy", date: "2025-02-18", time: "04:45 PM", purpose: "Eye Examination" },
  ];

  const handleAccept = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowUpdateModal(true);
  };

  const handleDecline = (appointment: any) => {
    setSelectedAppointment(appointment);
    setShowDeclineModal(true);
  };

  const handleSendDecline = () => {
    console.log("Postpone Date:", postponeDate);
    console.log("Reason:", reason);
    setShowDeclineModal(false);
  };

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h4 className={styles.heading}>Patient Appointments</h4>
      <div className={styles.tableContainer}>
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Patient Name</th>
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
                  <button className={styles.acceptbtn} onClick={() => handleAccept(appointment)}>Accept</button>
                  <button className={styles.declinebtn} onClick={() => handleDecline(appointment)}>Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accept Confirmation Modal */}
      {showUpdateModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Confirm Appointment</h4>
            <p>Are you sure you want to accept the appointment with <b>{selectedAppointment.doctor}</b>?</p>
            <div className={styles.modalActions}>
              <button className={styles.confirmbtn}>Confirm</button>
              <button className={styles.closeButton} onClick={() => setShowUpdateModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Decline Modal */}
      {showDeclineModal && selectedAppointment && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>Decline Appointment</h4>

            <label>Postpone to Another Date:</label>
            <input
              type="date"
              value={postponeDate}
              onChange={(e) => setPostponeDate(e.target.value)}
            />

            <label>Reason:</label>
            <textarea
              rows={3}
              placeholder="Enter reason for declining..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>

            <div className={styles.modalActions}>
              <button className={styles.sendbtn} onClick={handleSendDecline}>Send</button>
              <button className={styles.closeButton} onClick={() => setShowDeclineModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAppo;

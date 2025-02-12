import styles from '@/styles/admin/view_doctor.module.css';

const View_doctor: React.FC = () => {
    const doctors = [
        { name: "Dr. John Doe", email: "johndoe@example.com", phone: "1234567890", specialization: "Cardiology", username: "johndoe", password: "********" },
        { name: "Dr. Jane Smith", email: "janesmith@example.com", phone: "9876543210", specialization: "Neurology", username: "janesmith", password: "********" },
        { name: "Dr. Emily Brown", email: "emilybrown@example.com", phone: "5678901234", specialization: "Pediatrics", username: "emilybrown", password: "********" }
    ];

    return (
        <div className={styles.main}>
            <h4 className={styles.title}>Available Doctors</h4>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Created Username</th>
                        <th>Created Password</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={index}>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                            <td>{doctor.specialization}</td>
                            <td>{doctor.username}</td>
                            <td>{doctor.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default View_doctor;

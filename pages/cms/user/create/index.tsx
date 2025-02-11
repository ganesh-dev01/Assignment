import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import ThemeContext from '@/Theme/Themestate';
import styles from '@/styles/user/cretae.module.css';

const CreateAppo: React.FC = () => {
  const theme_data = useContext(ThemeContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Appointment Data:', data);
  };

  return (
    <div className={styles[`main_${theme_data?.theme}`]}>
      <h2 className={styles.header}>Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Available Doctors</label>
          <select {...register('doctor', { required: 'Doctor is required' })}>
            <option value="">Select a doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. John">Dr. John</option>
            <option value="Dr. Emily">Dr. Emily</option>
          </select>
          {errors.doctor && <p className={styles.error}>{errors.doctor.message as string}</p>}
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Appointment Date</label>
            <input type="date" {...register('date', { required: 'Date is required' })} />
            {errors.date && <p className={styles.error}>{errors.date.message as string}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label>Appointment Time</label>
            <input type="time" {...register('time', { required: 'Time is required' })} />
            {errors.time && <p className={styles.error}>{errors.time.message as string}</p>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Patient Name</label>
            <input type="text" {...register('patientName', { required: 'Name is required' })} />
            {errors.patientName && <p className={styles.error}>{errors.patientName.message as string}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className={styles.error}>{errors.email.message as string}</p>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" {...register('phone', { required: 'Phone number is required' })} />
          {errors.phone && <p className={styles.error}>{errors.phone.message as string}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Patient Address</label>
          <input type="text" {...register('address', { required: 'Address is required' })} />
          {errors.address && <p className={styles.error}>{errors.address.message as string}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Purpose</label>
          <textarea {...register('purpose', { required: 'Purpose is required' })}></textarea>
          {errors.purpose && <p className={styles.error}>{errors.purpose.message as string}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Book Appointment</button>
      </form>
    </div>
  );
};
export default CreateAppo;


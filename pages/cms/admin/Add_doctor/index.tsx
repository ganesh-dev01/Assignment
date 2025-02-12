import { useForm } from 'react-hook-form';
import styles from '@/styles/admin/add_doctor.module.css';

const Add_doctor: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className={styles.main}>
            <h4 className={styles.title}>Add Doctor</h4>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Doctor Name</label>
                    <input {...register('doctorName', { required: true })} className={styles.input} />
                    {errors.doctorName && <p className={styles.error}>Doctor Name is required</p>}
                </div>
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} className={styles.input} />
                        {errors.email && <p className={styles.error}>Valid Email is required</p>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Phone</label>
                        <input {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} className={styles.input} />
                        {errors.phone && <p className={styles.error}>Valid Phone Number is required</p>}
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label>Specialization</label>
                    <input {...register('specialization', { required: true })} className={styles.input} />
                    {errors.specialization && <p className={styles.error}>Specialization is required</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Set Username</label>
                    <input {...register('username', { required: true })} className={styles.input} />
                    {errors.username && <p className={styles.error}>Username is required</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Set Password</label>
                    <input type='password' {...register('password', { required: true, minLength: 6 })} className={styles.input} />
                    {errors.password && <p className={styles.error}>Password must be at least 6 characters</p>}
                </div>
                <button type="submit" className={styles.button}>Add Doctor</button>
            </form>
        </div>
    );
};

export default Add_doctor;

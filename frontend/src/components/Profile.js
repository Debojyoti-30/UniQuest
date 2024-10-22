import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Profile.module.css'; // Import your CSS module for styling

const Profile = () => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/edit-profile'); // Redirect to the Edit Profile page
    };

    return (
        <div className={styles.profileContainer}>
            <h1 className={styles.profileTitle}>Student Profile</h1>
            <div className={styles.profileDetails}>
                <h2 className={styles.sectionTitle}>Personal Information</h2>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
                <p><strong>Phone:</strong> +1 234 567 8901</p>
                <p><strong>Date of Birth:</strong> January 1, 2000</p>
                
                <h2 className={styles.sectionTitle}>Academic Information</h2>
                <p><strong>Program:</strong> Bachelor of Technology (BTech)</p>
                <p><strong>Year of Study:</strong> 3rd Year</p>
                <p><strong>GPA:</strong> 3.75</p>

                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <p><strong>Address:</strong> 1234 Main St, Anytown, USA</p>
            </div>
            <button className={styles.editButton} onClick={handleEditClick}>Edit Profile</button>
        </div>
    );
};

export default Profile;

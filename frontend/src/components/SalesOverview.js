import React from 'react';
import styles from '../styles/Upload.module.css'; // Correctly importing the CSS module
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection


const SalesOverview = () => {

    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert('Files submitted successfully!');
    };

    const handlePayment = () => {
        navigate('/payment'); // Redirect to the PaymentForm component
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Sales overview</h2>
            <p className="text-gray-600 mb-4">↑ 4% more in 2021</p>
            <img src="https://placehold.co/300x200" alt="Line chart showing sales overview" className="rounded-lg" />

            <div className={styles.uploadBody}>
            <h1 className={styles.uploadTitle}>University Registration Document Upload</h1>
            <div className={styles.uploadContainer}>
                {/*<section className={styles.uploadSection}>
                    <h2 className={styles.uploadHeader}>Required Documents</h2>
                    <ul className={styles.uploadList}>
                        <li className={styles.uploadItem}>Transcripts</li>
                        <li className={styles.uploadItem}>Passport Copy</li>
                        <li className={styles.uploadItem}>Letter of Recommendation</li>
                        <li className={styles.uploadItem}>Statement of Purpose</li>
                        <li className={styles.uploadItem}>Proof of English Proficiency</li>
                        <li className={styles.uploadItem}>Financial Statement</li>
                        <li className={styles.uploadItem}>High School Diploma</li>
                        <li className={styles.uploadItem}>GRE/GMAT Scores</li>
                        <li className={styles.uploadItem}>Portfolio (for Art/Design courses)</li>
                    </ul>
                </section>*/}

                <section className={styles.uploadForm}>
                    <h2 className={styles.uploadHeader}>Upload Your Documents</h2>
                    <form id="upload-form" onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="transcripts">Transcripts:</label>
                            <input className={styles.uploadInput} type="file" id="transcripts" name="transcripts" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="passport">Passport Copy:</label>
                            <input className={styles.uploadInput} type="file" id="passport" name="passport" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="recommendation">Letter of Recommendation:</label>
                            <input className={styles.uploadInput} type="file" id="recommendation" name="recommendation" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="sop">Statement of Purpose:</label>
                            <input className={styles.uploadInput} type="file" id="sop" name="sop" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="proficiency">Proof of English Proficiency:</label>
                            <input className={styles.uploadInput} type="file" id="proficiency" name="proficiency" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="financial">Financial Statement:</label>
                            <input className={styles.uploadInput} type="file" id="financial" name="financial" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="diploma">High School Diploma:</label>
                            <input className={styles.uploadInput} type="file" id="diploma" name="diploma" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="scores">GRE/GMAT Scores:</label>
                            <input className={styles.uploadInput} type="file" id="scores" name="scores" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.uploadLabel} htmlFor="portfolio">Portfolio (for Art/Design courses):</label>
                            <input className={styles.uploadInput} type="file" id="portfolio" name="portfolio" />
                        </div>
                        <button className={styles.uploadButton} type="submit">Submit & Save</button><br></br>
                        <p>After Submitting all documents, click below to proceed for payment </p>
                        <button className={styles.uploadButton} type="button" onClick={handlePayment}>Proceed to Payment</button><br></br>
                    </form>
                </section><br></br>
            </div>
        </div>
        </div>
    );
};

export default SalesOverview;

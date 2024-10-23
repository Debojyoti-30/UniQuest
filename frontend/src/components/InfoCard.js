import React from 'react';
import styles from '../styles/InfoCard.module.css'; // Updated path to reflect src/styles

const InfoCard = () => {
    return (
        <div className={styles.infoCardContainer}>
            <h2 className={styles.title}>Built by developers</h2>
            <h3 className={styles.subtitle}>Student Dashboard</h3>
            <p className={styles.description}>
                From colors, cards, typography to complex elements, you will find the full documentation.
            </p>
            <a href="/student-dashboard" className={styles.readMoreLink}>
                Read More <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    );
};

export default InfoCard;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Still use the external calendar CSS
import styles from '../styles/ImageCard.module.css'; // Updated path to reflect src/styles

const ImageCard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className={styles.imageCardContainer}>
            <img
                src="https://placehold.co/300x200"
                alt="Rocket illustration"
                className={styles.image}
            />
            {/* Calendar Component */}
            <div className={styles.calendarContainer}>
                <h3 className={styles.calendarTitle}>Select a date:</h3>
                <Calendar
                    onChange={setDate}
                    value={date}
                    className={styles.calendar}
                />
                <p className={styles.selectedDate}>
                    Selected date: {date.toDateString()}
                </p>
            </div>
        </div>
    );
};

export default ImageCard;

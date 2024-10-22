import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../styles/Sidebar.module.css'; // Import the CSS module

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            {/* Main Sidebar Content */}
            <div>
                {/* Dashboard Header */}
                <div className={styles.sidebarHeader}>
                    <i className={`fas fa-robot ${styles.icon}`}></i>
                    <span className={styles.headerText}>Dashboard</span>
                </div>

                {/* Main Navigation */}
                <nav>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <a href="/student-dashboard" className={styles.menuLink}>
                                <i className={`fas fa-tachometer-alt ${styles.menuIcon}`}></i>
                                Dashboard
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="/tables" className={styles.menuLink}>
                                <i className={`fas fa-table ${styles.menuIcon}`}></i>
                                Tables
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="/billing" className={styles.menuLink}>
                                <i className={`fas fa-file-invoice-dollar ${styles.menuIcon}`}></i>
                                Billing
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="/virtual-reality" className={styles.menuLink}>
                                <i className={`fas fa-vr-cardboard ${styles.menuIcon}`}></i>
                                Virtual Reality
                            </a>
                        </li>

                        {/* Account Pages Section */}
                        <h3 className={styles.sectionHeader}>Account Pages</h3>
                        <li className={styles.menuItem}>
                            <a href="/profile" className={styles.menuLink}> {/* Updated link */}
                                <i className={`fas fa-user ${styles.menuIcon}`}></i>
                                Profile
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="/sign-up" className={styles.menuLink}>
                                <i className={`fas fa-user-plus ${styles.menuIcon}`}></i>
                                Sign Up Now
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <br></br>

            {/* Need Help Section */}
            <div className={styles.helpSection}>
                <p className={styles.helpText}>Need help?</p>
                <button className={styles.helpButton}>Documentation</button>
                <button className={styles.upgradeButton}>Upgrade to Pro</button>
            </div>
        </div>
    );
};

export default Sidebar;

// src/components/StudentDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import MainContent from './MainContent';

function StudentDashboard() {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
            <MainContent onProfileClick={() => navigate('/profile')} /> {/* Pass the function as prop */}
        </div>
    );
}

export default StudentDashboard;

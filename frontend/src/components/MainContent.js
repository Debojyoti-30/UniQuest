import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import InfoCard from './InfoCard';
import ImageCard from './ImageCard';
import ChartCard from './ChartCard';
import SalesOverview from './SalesOverview';
import Sidebar from './Sidebar';
import Chatbot from './Chatbot';

const MainContent = ({ onProfileClick }) => {
    // List of courses and their corresponding background colors
    const courses = [
        { name: "BTech", color: "bg-blue-200" },
        { name: "BSc", color: "bg-green-200" },
        { name: "MTech", color: "bg-yellow-200" },
        { name: "PhD", color: "bg-purple-200" },
        { name: "MBA", color: "bg-red-200" },
        { name: "MSc", color: "bg-teal-200" },
        { name: "BBA", color: "bg-indigo-200" },
        { name: "MCA", color: "bg-orange-200" },
    ];

    // List of Indian universities and their corresponding background colors
    const universities = [
        { name: "IIT Bombay", color: "bg-pink-200" },
        { name: "IIT Delhi", color: "bg-teal-300" },
        { name: "IISc Bangalore", color: "bg-yellow-300" },
        { name: "IIT Madras", color: "bg-purple-300" },
        { name: "BITS Pilani", color: "bg-red-300" },
        { name: "DU", color: "bg-blue-300" },
        { name: "IIT Kanpur", color: "bg-green-300" },
        { name: "NIT Trichy", color: "bg-orange-300" },
    ];

    // List of foreign universities and their corresponding background colors
    const foreignUniversities = [
        { name: "Harvard University", color: "bg-yellow-200" },
        { name: "Stanford University", color: "bg-green-200" },
        { name: "MIT", color: "bg-blue-200" },
        { name: "University of Cambridge", color: "bg-purple-200" },
        { name: "University of Oxford", color: "bg-red-200" },
        { name: "ETH Zurich", color: "bg-teal-200" },
        { name: "University of Chicago", color: "bg-indigo-200" },
        { name: "University of California, Berkeley", color: "bg-orange-200" },
    ];

    // List of branches corresponding to the courses and their background colors
    const branches = [
        { name: "Computer Science", color: "bg-blue-300" },
        { name: "Mechanical Engineering", color: "bg-green-300" },
        { name: "Civil Engineering", color: "bg-red-300" },
        { name: "Electrical Engineering", color: "bg-yellow-300" },
        { name: "Electronics Engineering", color: "bg-purple-300" },
        { name: "Information Technology", color: "bg-teal-300" },
        { name: "MBA in Marketing", color: "bg-orange-300" },
        { name: "MBA in Finance", color: "bg-pink-300" },
    ];

    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const [currentUniversityIndex, setCurrentUniversityIndex] = useState(0);
    const [currentForeignUniversityIndex, setCurrentForeignUniversityIndex] = useState(0);
    const [currentBranchIndex, setCurrentBranchIndex] = useState(0);

    // Auto slide function for courses
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
        }, 3000); // Change course every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [courses.length]);

    // Auto slide function for Indian universities
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentUniversityIndex((prevIndex) => (prevIndex + 1) % universities.length);
        }, 3000); // Change university every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [universities.length]);

    // Auto slide function for foreign universities
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentForeignUniversityIndex((prevIndex) => (prevIndex + 1) % foreignUniversities.length);
        }, 3000); // Change foreign university every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [foreignUniversities.length]);

    // Auto slide function for branches
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBranchIndex((prevIndex) => (prevIndex + 1) % branches.length);
        }, 3000); // Change branch every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [branches.length]);

    // Functions for previous and next buttons for courses
    const handlePreviousCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    };

    const handleNextCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    };

    // Functions for previous and next buttons for Indian universities
    const handlePreviousUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex - 1 + universities.length) % universities.length);
    };

    const handleNextUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex + 1) % universities.length);
    };

    // Functions for previous and next buttons for foreign universities
    const handlePreviousForeignUniversity = () => {
        setCurrentForeignUniversityIndex((prevIndex) => (prevIndex - 1 + foreignUniversities.length) % foreignUniversities.length);
    };

    const handleNextForeignUniversity = () => {
        setCurrentForeignUniversityIndex((prevIndex) => (prevIndex + 1) % foreignUniversities.length);
    };

    // Functions for previous and next buttons for branches
    const handlePreviousBranch = () => {
        setCurrentBranchIndex((prevIndex) => (prevIndex - 1 + branches.length) % branches.length);
    };

    const handleNextBranch = () => {
        setCurrentBranchIndex((prevIndex) => (prevIndex + 1) % branches.length);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Header />
                
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Courses Card */}
                    <div className={`relative shadow-lg rounded-lg overflow-hidden ${courses[currentCourseIndex].color} h-64`}>
                        <h3 className="text-lg font-semibold p-4">{`Courses: ${courses[currentCourseIndex].name}`}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousCourse} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextCourse} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Indian Universities Card */}
                    <div className={`relative shadow-lg rounded-lg overflow-hidden ${universities[currentUniversityIndex].color} h-64`}>
                        <h3 className="text-lg font-semibold p-4">{`Indian Universities: ${universities[currentUniversityIndex].name}`}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousUniversity} 
                                className="p-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextUniversity} 
                                className="p-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Foreign Universities Card */}
                    <div className={`relative shadow-lg rounded-lg overflow-hidden ${foreignUniversities[currentForeignUniversityIndex].color} h-64`}>
                        <h3 className="text-lg font-semibold p-4">{`Foreign Universities: ${foreignUniversities[currentForeignUniversityIndex].name}`}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousForeignUniversity} 
                                className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextForeignUniversity} 
                                className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Branches Card */}
                    <div className={`relative shadow-lg rounded-lg overflow-hidden ${branches[currentBranchIndex].color} h-64`}>
                        <h3 className="text-lg font-semibold p-4">{`Branches: ${branches[currentBranchIndex].name}`}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousBranch} 
                                className="p-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextBranch} 
                                className="p-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <InfoCard />
                    <ImageCard />
                    <ChartCard />
                    <SalesOverview />
                </div>

                {/* Chatbot */}
                <Chatbot />
            </div>
        </div>
    );
};

export default MainContent;

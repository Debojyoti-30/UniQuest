import React from 'react';
import UnivAbout from './UnivAbout';
import UnivPrograms from './UnivPrograms';
import UnivAdmissions from './UnivAdmissions';
import UnivContact from './UnivContact';
import Research from './Research';
import CampusLife from './CampusLife';
import UnivHeader from './UnivHeader';
import UnivFooter from './UnivFooter';
import Placement from './Placement';
import ScholarshipPortal from './ScholarshipPortal';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import universities from '../json/universityData.json';
import '../styles/UnivProfile.css';

const UnivProfTest = () => {
  const { id } = useParams();
  const university = universities.find((uni) => uni.id === parseInt(id));
  const location = useLocation();
  const navigate = useNavigate();

  if (!university) {
    return <div>University not found!</div>;
  }

  const handleApplyClick = () => {
    navigate('/upload');
  };

  const renderPage = () => {
    switch (location.pathname) {
      case '/about':
        return <UnivAbout about={university.about} />;
      case '/programs':
        return <UnivPrograms programs={university.programs} />;
      case '/admissions':
        return <UnivAdmissions admissions={university.admissions} />;
      case '/research':
        return <Research research={university.research} />;
      case '/campus-life':
        return <CampusLife campusLife={university.campusLife} />;
      case '/placement':
        return <Placement placement={university.placement} />;
      case '/scholarship-portal':
        return <ScholarshipPortal scholarships={university.scholarships} />;
      case '/contact':
        return <UnivContact phone={university.phoneNumber} />;
      default:
        return (
          <div>
            <section id="admission">
              <h2>Admission Procedure</h2>
              <p>{university.admissions.process}</p>
              <ul>
                <li><strong>Step 1:</strong> Online Application</li>
                <li><strong>Step 2:</strong> {university.admissions.criteria}</li>
                <li><strong>Step 3:</strong> Interview/Tests</li>
              </ul>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="univ-profile">
      <UnivHeader 
        name={university.name} 
        image={university.image} 
        location={university.location} 
        nirfRanking={university.nirfRanking}
        qsRanking={university.qsRanking}
      />
      {renderPage()}
      <div className="apply-now">
        <button onClick={handleApplyClick}>Apply Now</button>
      </div>
      <UnivFooter />
    </div>
  );
};

export default UnivProfTest;

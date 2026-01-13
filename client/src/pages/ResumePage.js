import React, { useState } from 'react';
import ResumeUpload from '../components/resume/ResumeUpload';
import SuggestedRoles from '../components/resume/SuggestedRoles';
import ResumeScoreBanner from '../components/resume/ResumeScoreBanner';
import { FiFileText, FiRefreshCw } from 'react-icons/fi';
import './ResumePage.css';

const ResumePage = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileSelect = (file) => {
    if (file && file.type === "application/pdf") {
      setResumeFile(file);
      setIsAnalyzing(true);
      setAnalysisResult(null); // Clear previous results

      // Simulate backend AI analysis
      setTimeout(() => {
        const dummyAnalysisData = {
          roles: [
            { title: "Frontend Developer", match: 92 },
            { title: "React Developer", match: 88 },
            { title: "UI/UX Engineer", match: 75 },
          ],
          scores: {
            ats: 85,
            keywords: 78,
            impact: 91,
            format: 95,
          }
        };
        setAnalysisResult(dummyAnalysisData);
        setIsAnalyzing(false);
      }, 2500); // 2.5 second delay
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
    setAnalysisResult(null);
  };

  return (
    <div className="resume-page">
      <div className="resume-page-header">
        <h1>Resume Hub</h1>
        <p>Upload your resume to get AI-powered feedback and job recommendations.</p>
      </div>

      <div className="resume-content-area">
        {!resumeFile ? (
          <ResumeUpload onFileSelect={handleFileSelect} />
        ) : (
          <div className="resume-analysis-container">
            <div className="practice-card resume-info-card">
              <FiFileText />
              <span className="file-name">{resumeFile.name}</span>
              <button className="reupload-btn" onClick={handleRemoveResume}>
                <FiRefreshCw /> Upload New
              </button>
            </div>

            {isAnalyzing && (
              <div className="analyzing-indicator">
                <div className="spinner"></div>
                <p>Analyzing your resume...</p>
              </div>
            )}
            
            {analysisResult && <SuggestedRoles roles={analysisResult.roles} />}
          </div>
        )}
      </div>

      {analysisResult && <ResumeScoreBanner scores={analysisResult.scores} />}
    </div>
  );
};

export default ResumePage;
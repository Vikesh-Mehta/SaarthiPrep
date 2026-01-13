// client/src/pages/ProgressPage.js  <-- The correct file!

import React, { useMemo } from 'react';
import ReadinessScore from '../components/progress/ReadinessScore';
import SkillsBreakdown from '../components/progress/SkillsBreakdown';
import ProgressTimeline from '../components/progress/ProgressTimeline';
import './ProgressPage.css'; // We'll keep this CSS name for now

// DUMMY DATA AGGREGATED FROM OTHER PAGES
const dummyQuizHistory = [
  { id: 1, topic: 'Arrays & Hashing', score: 8, total: 10, date: new Date('2023-10-10').toISOString() },
  { id: 2, topic: 'Two Pointers', score: 6, total: 10, date: new Date('2023-10-12').toISOString() },
  { id: 3, topic: 'Arrays & Hashing', score: 9, total: 10, date: new Date('2023-10-15').toISOString() },
  { id: 4, topic: 'Stack', score: 7, total: 10, date: new Date('2023-10-18').toISOString() },
];

const dummyInterviewHistory = [
  { id: 1, type: 'AI Mock', role: 'SDE 1', date: new Date('2023-10-11').toISOString(), score: 75 },
  { id: 2, type: 'Peer Practice', role: 'Frontend Developer', date: new Date('2023-10-16').toISOString(), score: 88 },
];

const dummyResumeScore = 85;

const ProgressPage = () => { // Renamed component to match file

  const readinessScore = useMemo(() => {
    if (dummyQuizHistory.length === 0 || dummyInterviewHistory.length === 0) return 0;
    const avgQuizScore = dummyQuizHistory.reduce((acc, q) => acc + (q.score / q.total), 0) / dummyQuizHistory.length;
    const avgInterviewScore = dummyInterviewHistory.reduce((acc, i) => acc + i.score, 0) / dummyInterviewHistory.length;
    const score = (avgQuizScore * 100 * 0.4) + (avgInterviewScore * 0.4) + (dummyResumeScore * 0.2);
    return Math.round(score);
  }, []);

  const skillsData = useMemo(() => {
    const skills = {};
    dummyQuizHistory.forEach(q => {
      if (!skills[q.topic]) {
        skills[q.topic] = { totalScore: 0, count: 0 };
      }
      skills[q.topic].totalScore += (q.score / q.total) * 100;
      skills[q.topic].count++;
    });
    return Object.entries(skills).map(([subject, data]) => ({
      subject,
      score: Math.round(data.totalScore / data.count),
      fullMark: 100,
    }));
  }, []);

  const timelineData = useMemo(() => {
    const quizzes = dummyQuizHistory.map(q => ({ type: 'quiz', ...q }));
    const interviews = dummyInterviewHistory.map(i => ({ type: 'interview', ...i }));
    return [...quizzes, ...interviews].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  return (
    <div className="progress-page">
      <div className="progress-page-header">
        <h1>My Progress</h1>
        <p>A detailed overview of your preparation journey and skill development.</p>
      </div>
      <div className="progress-grid">
        <ReadinessScore score={readinessScore} />
        <SkillsBreakdown data={skillsData} />
      </div>
      <ProgressTimeline data={timelineData} />
    </div>
  );
};

export default ProgressPage; // Exporting the correct component name
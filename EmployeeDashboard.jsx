import { useEffect, useState } from 'react';
import { UserCircle, Target, Award, BookOpen, Star, ChevronRight, Briefcase } from 'lucide-react';
import mockData from '../data.json';

const EmployeeDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      setData(mockData.employeeDashboard);
    }, 300);
  }, []);

  if (!data) return <div style={{ color: 'white' }}>Loading...</div>;

  return (
    <div className="dashboard employee-dashboard">
      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981' }}>
          <UserCircle size={24} /> Employee Dashboard
        </h2>
        <a href="#" className="view-full-link">View Full Dashboard <ChevronRight size={16} /></a>
      </div>

      <div className="card profile-header-card" style={{ marginBottom: '20px' }}>
        <div className="flex-between">
          <div className="person-info flex-center gap-6">
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{data.user.name}</h2>
              <p className="text-muted">{data.user.role}</p>
            </div>
          </div>
          <div className="overall-readiness text-right">
            <p className="text-muted" style={{ marginBottom: '5px' }}>Overall Readiness Score</p>
            <div className="flex-center gap-4">
              <div className="donut-chart small">
                <span className="donut-value">{data.user.overallReadiness}%</span>
              </div>
              <span className="text-green" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{data.user.status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-main-row">
        <div className="dashboard-col" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <Star size={18} color="#f59e0b" /> My Strengths
            </h3>
            <div className="tags-container">
              {data.strengths.map((strength, idx) => (
                <span key={idx} className="tag">{strength}</span>
              ))}
            </div>
          </div>

          <div className="card performance-card">
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <Award size={18} color="#8b5cf6" /> Performance
            </h3>
            <div className="performance-stats flex-between mb-4">
               <div>
                 <p className="text-muted" style={{ fontSize: '0.8rem' }}>Recent Rating</p>
                 <h2 className="text-green">{data.performance.rating}</h2>
               </div>
               <div>
                 <p className="text-muted" style={{ fontSize: '0.8rem' }}>Goals Completed</p>
                 <h2 className="text-blue">{data.performance.goalsCompleted}</h2>
               </div>
            </div>
            <p className="feedback-quote">"{data.performance.recentFeedback}"</p>
          </div>

        </div>

        <div className="dashboard-col" style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <Target size={18} color="#3b82f6" /> Recommended for Roles
            </h3>
            <div className="recommended-roles-list">
              {data.recommendedRoles.map((role, idx) => (
                <div key={idx} className="role-match-card flex-between">
                  <div className="role-info flex-center gap-4">
                    <div className="role-icon bg-blue"><Briefcase size={16} color="#93c5fd" /></div>
                    <span>{role.role}</span>
                  </div>
                  <div className="match-score text-green">{role.match} Match <span>&gt;</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="card learning-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <BookOpen size={18} color="#10b981" /> Suggested Learning
            </h3>
            <div className="learning-item flex-between">
              <div className="learning-info flex-center gap-4">
                 <div className="learning-icon bg-green"><BookOpen size={18} color="#6ee7b7" /></div>
                 <div>
                   <p className="course-title">{data.suggestedLearning.course}</p>
                   <p className="course-provider text-muted">{data.suggestedLearning.provider} • {data.suggestedLearning.duration}</p>
                 </div>
              </div>
              <button className="btn-primary">Start Now</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;

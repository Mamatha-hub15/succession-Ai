import { useEffect, useState } from 'react';
import { Users, TrendingUp, AlertTriangle, Briefcase, ChevronRight } from 'lucide-react';
import mockData from '../data.json';

const ManagerDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      setData(mockData.managerDashboard);
    }, 300);
  }, []);

  if (!data) return <div style={{ color: 'white' }}>Loading...</div>;

  return (
    <div className="dashboard manager-dashboard">
      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={24} color="#f59e0b" /> Manager Dashboard
        </h2>
        <a href="#" className="view-full-link">View Full Dashboard <ChevronRight size={16} /></a>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '15px' }}>My Team Overview</h3>
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div className="stat-card mini">
            <p className="stat-title">Team Members</p>
            <h2 className="stat-value">{data.teamOverview.teamMembers}</h2>
          </div>
          <div className="stat-card mini">
            <p className="stat-title text-green">Ready Successors</p>
            <h2 className="stat-value text-green">{data.teamOverview.readySuccessors}</h2>
          </div>
          <div className="stat-card mini">
            <p className="stat-title text-yellow">Skill Gaps</p>
            <h2 className="stat-value text-yellow">{data.teamOverview.skillGaps}</h2>
          </div>
          <div className="stat-card mini stat-alert">
            <p className="stat-title text-red">At Risk</p>
            <h2 className="stat-value text-red">{data.teamOverview.atRisk}</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-main-row" style={{ marginTop: '20px' }}>
        <div className="card" style={{ flex: 1 }}>
          <h3>Team Readiness</h3>
          <div className="readiness-chart">
            <div className="donut-chart">
              <span className="donut-value">{data.teamReadiness.average}%</span>
              <span className="donut-label">Avg Readiness</span>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="dot green"></span>
                <span>Ready <strong>{data.teamReadiness.ready}%</strong></span>
              </div>
              <div className="legend-item">
                <span className="dot yellow"></span>
                <span>Needs Development <strong>{data.teamReadiness.needsDevelopment}%</strong></span>
              </div>
              <div className="legend-item">
                <span className="dot red"></span>
                <span>High Risk <strong>{data.teamReadiness.highRisk}%</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <div className="flex-between mb-4">
            <h3>Top Successors</h3>
          </div>
          <div className="top-successors-list">
            {data.topSuccessors.map((person, idx) => (
              <div key={idx} className="successor-row flex-between">
                <div className="person-info flex-center gap-4">
                  <img src={`https://i.pravatar.cc/150?img=${idx+40}`} alt={person.name} className="profile-img" />
                  <div>
                    <p className="person-name">{person.name}</p>
                    <p className="person-role">{person.role}</p>
                  </div>
                </div>
                <div className="readiness-score text-green">{person.readiness}</div>
              </div>
            ))}
          </div>
          <a href="#" className="view-details-link">View Team Details →</a>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;

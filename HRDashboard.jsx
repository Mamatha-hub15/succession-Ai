import { useEffect, useState } from 'react';
import { Users, ShieldAlert, AlertTriangle, UserCheck, UserMinus, ChevronRight, ChevronLeft, Calendar as CalendarIcon, X, Brain } from 'lucide-react';
import './Dashboard.css';
import mockData from '../data.json';

const HRDashboard = () => {
  const [data, setData] = useState(null);
  const [isInsightsModalOpen, setIsInsightsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate network request for realism
    setTimeout(() => {
      setData(mockData.adminDashboard);
    }, 300);
  }, []);

  if (!data) return <div style={{ color: 'white' }}>Loading...</div>;

  return (
    <div className="dashboard hr-dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon bg-indigo"><Users size={20} color="#a5b4fc" /></div>
          <div className="stat-info">
            <p className="stat-title">Total Employees</p>
            <h2 className="stat-value">{data.stats.totalEmployees.value}</h2>
            <p className="stat-trend text-green">{data.stats.totalEmployees.trend}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon bg-orange"><ShieldAlert size={20} color="#fdba74" /></div>
          <div className="stat-info">
            <p className="stat-title">Critical Roles</p>
            <h2 className="stat-value">{data.stats.criticalRoles.value}</h2>
            <p className="stat-action text-yellow">{data.stats.criticalRoles.action}</p>
          </div>
        </div>

        <div className="stat-card stat-alert">
          <div className="stat-icon bg-red"><AlertTriangle size={20} color="#fca5a5" /></div>
          <div className="stat-info">
            <p className="stat-title">High Risk Roles</p>
            <h2 className="stat-value">{data.stats.highRiskRoles.value}</h2>
            <p className="stat-action text-red">{data.stats.highRiskRoles.action}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon bg-green"><UserCheck size={20} color="#86efac" /></div>
          <div className="stat-info">
            <p className="stat-title">Ready Successors</p>
            <h2 className="stat-value">{data.stats.readySuccessors.value}</h2>
            <p className="stat-trend text-green">{data.stats.readySuccessors.trend}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon bg-purple"><UserMinus size={20} color="#d8b4fe" /></div>
          <div className="stat-info">
            <p className="stat-title">Attrition Risk</p>
            <h2 className="stat-value">{data.stats.attritionRisk.value}</h2>
            <p className="stat-action text-purple">{data.stats.attritionRisk.action}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-main-row">
        <div className="card hierarchy-card" style={{ flex: 2 }}>
          <h3 style={{ marginBottom: '20px' }}>Succession Overview</h3>
          <div className="hierarchy-tree">
            {/* CEO Node */}
            <div className="tree-node ceo-node">
              <img src="https://i.pravatar.cc/150?img=12" alt="CEO" className="node-img" />
              <div className="node-info">
                <p className="node-role">{data.hierarchy.role}</p>
                <p className="node-name">{data.hierarchy.name}</p>
              </div>
              <div className="node-badge green">{data.hierarchy.readiness}</div>
            </div>
            
            {/* Connection Lines simulation */}
            <div className="tree-lines"></div>

            {/* Direct Reports */}
            <div className="tree-children">
              {data.hierarchy.directReports.map((report, idx) => (
                <div key={idx} className="tree-child">
                  <div className="tree-node child-node">
                    <img src={`https://i.pravatar.cc/150?img=${idx+20}`} alt={report.name} className="node-img" />
                    <div className="node-info">
                      <p className="node-role">{report.role}</p>
                      <p className="node-name">{report.name}</p>
                    </div>
                    <div className={`node-badge ${report.status === 'Ready' ? 'green' : report.status === 'Needs Development' ? 'yellow' : 'red'}`}>
                      {report.readiness}
                    </div>
                  </div>
                  
                  <div className="successors-list">
                    <p className="list-title">Top Successors</p>
                    <div className="avatars">
                      {report.topSuccessors.map((s, i) => (
                        <img key={i} src={`https://i.pravatar.cc/150?img=${i+30+idx}`} alt="successor" className="successor-avatar" />
                      ))}
                      {report.extraSuccessors > 0 && <span className="extra-avatar">+{report.extraSuccessors}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="tree-legend">
              <span className="legend-item"><span className="dot green"></span> Ready</span>
              <span className="legend-item"><span className="dot yellow"></span> Needs Development</span>
              <span className="legend-item"><span className="dot red"></span> High Risk</span>
            </div>
          </div>
        </div>

        <div className="dashboard-side-col">
          <div className="card insights-card">
            <h3>AI Insights</h3>
            <div className="insights-icon">
              <Brain size={48} color="#6366f1" />
            </div>
            <ul className="insights-list">
              <li className="insight-item">
                <span className="insight-dot red"></span>
                <p><strong>2 critical roles</strong> have no ready successor</p>
              </li>
              <li className="insight-item">
                <span className="insight-dot yellow"></span>
                <p><strong>3 senior employees</strong> may leave in next 6 months</p>
              </li>
              <li className="insight-item">
                <span className="insight-dot red"></span>
                <p><strong>Marketing Head role</strong> needs immediate attention</p>
              </li>
            </ul>
            <button className="btn-primary w-full" onClick={() => setIsInsightsModalOpen(true)}>View AI Insights</button>
          </div>
          
          <div className="card events-card">
            <div className="flex-between" style={{ marginBottom: '15px' }}>
              <h3>Upcoming Events</h3>
              <X size={16} color="var(--text-muted)" style={{cursor: 'pointer'}} />
            </div>
            <div className="calendar-header">
              <ChevronLeft size={16} />
              <span>May 2024</span>
              <ChevronRight size={16} />
            </div>
            <div className="events-list mt-4">
              <div className="event-item">
                <div className="event-icon bg-indigo"><Users size={14} color="#818cf8"/></div>
                <div className="event-info">
                  <p className="event-title">Leadership Review Meeting</p>
                  <p className="event-time">16 May 2024 • 10:00 AM</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-icon bg-yellow"><CalendarIcon size={14} color="#fcd34d"/></div>
                <div className="event-info">
                  <p className="event-title">Succession Planning Workshop</p>
                  <p className="event-time">20 May 2024 • 02:00 PM</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-icon bg-pink"><Brain size={14} color="#f472b6"/></div>
                <div className="event-info">
                  <p className="event-title">AI Skills Assessment</p>
                  <p className="event-time">25 May 2024 • 11:00 AM</p>
                </div>
              </div>
            </div>
            <button className="btn-secondary w-full mt-4">View All Events</button>
          </div>
        </div>
      </div>

      {isInsightsModalOpen && (
        <div className="modal-overlay" onClick={() => setIsInsightsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex-between" style={{ marginBottom: '20px' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Brain size={28} color="#6366f1" /> AI Insights Details
              </h2>
              <X size={24} color="var(--text-muted)" style={{cursor: 'pointer'}} onClick={() => setIsInsightsModalOpen(false)} />
            </div>
            
            <div className="modal-body">
              <div className="insight-detail-card" style={{ borderLeft: '4px solid var(--accent-red)' }}>
                <h3>2 critical roles have no ready successor</h3>
                <p className="text-muted">The positions of Finance Head and Marketing Head currently have no identified successors that are marked as "Ready". Immediate action is required to build the talent pipeline for these roles.</p>
                <button className="btn-secondary" style={{ marginTop: '10px' }}>View Talent Pool</button>
              </div>

              <div className="insight-detail-card" style={{ borderLeft: '4px solid var(--accent-yellow)' }}>
                <h3>3 senior employees may leave in next 6 months</h3>
                <p className="text-muted">Predictive analytics suggest a high flight risk for three key personnel in the Engineering department due to recent market trends and internal compensation benchmarks.</p>
                <button className="btn-secondary" style={{ marginTop: '10px' }}>Schedule Retention Meeting</button>
              </div>

              <div className="insight-detail-card" style={{ borderLeft: '4px solid var(--accent-red)' }}>
                <h3>Marketing Head role needs immediate attention</h3>
                <p className="text-muted">The current Marketing Head is approaching retirement, and the top successor's readiness score has dropped to 60%. A fast-tracked training program is recommended.</p>
                <button className="btn-secondary" style={{ marginTop: '10px' }}>Review Succession Plan</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRDashboard;

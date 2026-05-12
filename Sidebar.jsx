import { 
  LayoutDashboard, 
  Users, 
  UserCircle, 
  Briefcase, 
  TrendingUp, 
  Brain, 
  Activity, 
  BookOpen, 
  BarChart2, 
  Bell, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  AlertTriangle,
  Building2
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="icon">
          <Brain size={20} color="white" />
        </div>
        SuccessionAI
      </div>
      
      <div className="company-selector">
        <div className="flex-center gap-2">
          <Building2 size={16} />
          <span>Tech Infinity</span>
        </div>
        <span>▼</span>
      </div>

      <div className="nav-section">
        <div className="nav-section-title">Main</div>
        <div 
          className={`nav-item ${activeTab === 'hr' || activeTab === 'manager' || activeTab === 'employee' ? 'active' : ''}`}
          onClick={() => setActiveTab('hr')}
        >
          <LayoutDashboard size={18} /> Dashboard
        </div>
        <div className="nav-item"><Users size={18} /> Organization</div>
        <div 
          className={`nav-item ${activeTab === 'employees-list' ? 'active' : ''}`}
          onClick={() => setActiveTab('employees-list')}
        >
          <UserCircle size={18} /> Employees
        </div>
        <div className="nav-item"><Briefcase size={18} /> Roles & Positions</div>
      </div>

      <div className="nav-section">
        <div className="nav-section-title">Modules</div>
        <div className="nav-item flex-between">
          <div className="flex-center gap-2"><TrendingUp size={18} /> Succession Planning</div>
          <span>▶</span>
        </div>
        <div className="nav-item"><Brain size={18} /> AI Predictions</div>
        <div className="nav-item"><Activity size={18} /> Skill Analysis</div>
        <div className="nav-item"><BookOpen size={18} /> Training & Development</div>
        <div className="nav-item"><BarChart2 size={18} /> Reports & Analytics</div>
        <div className="nav-item"><Bell size={18} /> Alerts & Notifications</div>
      </div>

      <div className="nav-section" style={{ marginTop: 'auto' }}>
        <div className="nav-section-title">Others</div>
        <div className="nav-item flex-between">
          <div className="flex-center gap-2"><MessageSquare size={18} /> Chatbot Assistant</div>
          <span style={{ fontSize: '0.6rem', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '4px', padding: '2px 4px' }}>New</span>
        </div>
        <div className="nav-item"><Settings size={18} /> Settings</div>
        <div className="nav-item"><HelpCircle size={18} /> Help & Support</div>
        
        <div style={{ padding: '0 20px', marginTop: '10px' }}>
          <button style={{ width: '100%', padding: '10px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <AlertTriangle size={16} /> Emergency Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

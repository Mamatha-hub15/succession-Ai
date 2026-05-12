import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import HRDashboard from './components/HRDashboard';
import ManagerDashboard from './components/ManagerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeesList from './components/EmployeesList';

function App() {
  const [activeTab, setActiveTab] = useState('hr'); // 'hr', 'manager', 'employee', 'employees-list'

  const renderDashboard = () => {
    switch (activeTab) {
      case 'hr':
        return <HRDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'employee':
        return <EmployeeDashboard />;
      case 'employees-list':
        return <EmployeesList />;
      default:
        return <HRDashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="dashboard-content">
          {renderDashboard()}
        </div>
      </div>
    </div>
  );
}

export default App;

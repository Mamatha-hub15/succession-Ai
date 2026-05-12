import { useEffect, useState } from 'react';
import { Users, CheckCircle } from 'lucide-react';
import mockData from '../data.json';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Simulate network request
    setTimeout(() => {
      const highReady = mockData.highReadinessEmployees.filter(emp => emp.readiness >= 85);
      setEmployees(highReady);
    }, 300);
  }, []);

  return (
    <div className="dashboard employees-list">
      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Users size={24} color="#6366f1" /> High Readiness Employees
        </h2>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '15px' }}>Employees with &gt; 85% Readiness</h3>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Role</th>
                <th style={{ padding: '12px' }}>Department</th>
                <th style={{ padding: '12px' }}>Readiness Score</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '12px', fontWeight: '500' }}>{emp.name}</td>
                  <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{emp.role}</td>
                  <td style={{ padding: '12px' }}>{emp.department}</td>
                  <td style={{ padding: '12px', color: 'var(--accent-green)', fontWeight: 'bold' }}>
                    {emp.readiness}%
                  </td>
                  <td style={{ padding: '12px' }}>
                    <div className="flex-center gap-2" style={{ display: 'inline-flex', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '12px', color: 'var(--accent-green)', fontSize: '0.8rem' }}>
                      <CheckCircle size={14} /> Ready Now
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;

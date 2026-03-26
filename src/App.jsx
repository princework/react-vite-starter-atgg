import { useState } from "react";
import "./App.css";

export default function App() {
  const [role, setRole] = useState(null);

  if (!role) return <Login setRole={setRole} />;

  if (role === "CFO") return <CFODashboard />;
  if (role === "HR") return <HRDashboard />;
}

/* LOGIN PAGE */
function Login({ setRole }) {
  return (
    <div className="login">
      <div className="box">
        <h2>CFO Helios</h2>

        <button onClick={() => setRole("CFO")}>
          Enter as CFO
        </button>

        <button onClick={() => setRole("HR")}>
          Enter as HR
        </button>
      </div>
    </div>
  );
}

/* CFO DASHBOARD */
function CFODashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <h1>CFO Dashboard</h1>

        <div className="cards">
          <div className="card green">Completion 72%</div>
          <div className="card yellow">Pending 18%</div>
          <div className="card red">Delayed 10%</div>
        </div>

        <div className="table-box">
          <h3>Compliance Tasks</h3>

          <table>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Department</th>
            </tr>

            <tr>
              <td>GST Filing</td>
              <td className="red">Delayed</td>
              <td>Finance</td>
            </tr>

            <tr>
              <td>PF Filing</td>
              <td className="yellow">Pending</td>
              <td>HR</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

/* HR DASHBOARD */
function HRDashboard() {
  return (
    <div className="dash">
      <h1>HR Dashboard</h1>
      <p>PF, ESIC, Payroll compliance will show here</p>
    </div>
  );
}

/* SIDEBAR */
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Helios</h2>
      <p>Dashboard</p>
      <p>Compliance</p>
      <p>Reports</p>
      <p>Settings</p>
    </div>
  );
}

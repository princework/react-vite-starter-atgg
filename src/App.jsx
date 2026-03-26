import { useState } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  return user ? <Dashboard /> : <Login setUser={setUser} />;
}

function Login({ setUser }) {
  return (
    <div className="login">
      <div className="box">
        <h2>CFO Helios</h2>
        <input id="email" placeholder="Enter Email" />
        <button
          onClick={() =>
            setUser(document.getElementById("email").value)
          }
        >
          Enter
        </button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dash">
      <h1>CFO Dashboard</h1>

      <div className="cards">
        <div className="card green">Completed: 72%</div>
        <div className="card yellow">Pending: 18%</div>
        <div className="card red">Delayed: 10%</div>
      </div>
    </div>
  );
}

import { useState } from "react";

import Savings from "../savings/savings";
import "./Dashboard.css";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navigation-bar">
        <h1>Life Dashboard</h1>

        <div className="navigation-menu">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
                <button>
                    <span className="material-symbols-outlined">settings</span>
                    <span>Settings</span>
                </button>
              <button>
                <span className="material-symbols-outlined">login</span>
                <span>Login</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      <Savings />
    </main>
  );
}

export default Dashboard;

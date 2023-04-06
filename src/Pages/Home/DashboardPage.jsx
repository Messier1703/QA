import React from "react";
import "./DashboardPage.scss";

function DashboardPage() {
  return (
    <div className="container">
      <div className="dashboard-page">
        <header className="dashboard-header">Header</header>
        <main className="dashboard-content">
          <h1>Repositories</h1>
          <ul className="repository-list">
            <li className="repository-card">Repository 1</li>
            <li className="repository-card">Repository 2</li>
            <li className="repository-card">Repository 3</li>
          </ul>
        </main>
        <footer className="dashboard-footer">Footer</footer>
      </div>
    </div>
  );
}

export default DashboardPage;

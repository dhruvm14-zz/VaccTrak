import React from "react";
import "./Stats.css";
function Stats() {
  return (
    <div className="stats">
      <div className="stats-left">
        <h1 className="covid-cases">CURRENT COVID-19 STATS</h1>
        <div className="cases">
          <div className="active">ACTIVE</div>
          <div className="recovered">RECOVERED</div>
          <div className="deaths">DEATHS</div>
        </div>
        <div className="total-cases">TOTAL CASES</div>
      </div>
      <div className="stats-right">stats right</div>
    </div>
  );
}

export default Stats;

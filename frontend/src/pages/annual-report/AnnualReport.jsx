import React from 'react';
import "./annualReport.css";

function AnnualReport() {
  return (
    <div id='annual-report-main'>
        <div className="annual-report container">
      <h1 className="report-title">Annual Report 2023</h1>
      <p className="report-description">
        A comprehensive summary of our company's performance, achievements, and financial highlights for the year 2023.
      </p>
      <div className="report-details">
        <div className="section">
          <h2>Financial Highlights</h2>
          <p>Revenue: $X million</p>
          <p>Profit: $Y million</p>
        </div>
        <div className="section">
          <h2>Achievements</h2>
          <ul>
            <li>Launched new products</li>
            <li>Expanded into new markets</li>
            <li>Received industry awards</li>
          </ul>
        </div>
        <div className="section">
          <h2>Goals for 2024</h2>
          <p>Continue growth and innovation</p>
          <p>Strengthen customer relationships</p>
        </div>
      </div>
    {/* <main className="content">
      <embed src="/assets/annual_report.pdf" type="application/pdf" width="100%" height="600px" />
    </main> */}
    </div>
    </div>
  )
}

export default AnnualReport
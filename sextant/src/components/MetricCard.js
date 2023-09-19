import React from "react";

export default function MetricCard(props) {
  return (
    <div className="info-card">
      <h2>{props.heading}</h2>
      <div className="info-child">
        {props.children}
      </div>
    </div>
  );
}

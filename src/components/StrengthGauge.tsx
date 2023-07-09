import "./StrengthGauge.css";

export default function StrengthGauge() {
  return (
    <div className="strength-gauge-container">
      <p>STRENGTH</p>
      <div className="gauge-bars-container">
        <p>MEDIUM</p>
        <div className="gauge-bar"></div>
        <div className="gauge-bar"></div>
        <div className="gauge-bar"></div>
        <div className="gauge-bar"></div>
      </div>
    </div>
  );
}

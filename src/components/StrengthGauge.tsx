import "./StrengthGauge.css";

function strengthLabel(strength: number) {
  console.log(strength);
  switch (strength) {
    case 0:
      return "TOO WEAK!";
    case 1:
      return "WEAK";
    case 2:
      return "MEDIUM";
    case 3:
      return "STRONG";
    default:
      return "UNKNOWN";
  }
}

function gaugeColors(strength: number): string[] {
  switch (strength) {
    case 0:
      return ["red","blank","blank","blank"];
    case 1:
      return ["orange","orange","blank","blank"];
    case 2:
      return ["yellow","yellow","yellow","blank"];
    case 3:
      return ["green","green","green","green"];
    default:
      return ["blank","blank","blank","blank"];
  }
}

interface StrengthGaugeProps {
  strength: number;
}

export default function StrengthGauge(props: StrengthGaugeProps) {

  let colors = gaugeColors(props.strength);

  return (
    <div className="strength-gauge-container">

      <p>STRENGTH</p>

      <div className="gauge-bars-container">
        <p>{strengthLabel(props.strength)}</p>
        <div className={"gauge-bar "+colors[0]}></div>
        <div className={"gauge-bar "+colors[1]}></div>
        <div className={"gauge-bar "+colors[2]}></div>
        <div className={"gauge-bar "+colors[3]}></div>
      </div>
      
    </div>
  );
}

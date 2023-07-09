import StrengthGauge from "./StrengthGauge";
import "./Generator.css";

export default function Generator() {
  return (
    <div className="generator-container">


      <div className="slider-label">
        <p>Character length</p>
        <p>0</p>
      </div>

      <input type="range" className="slider" name="length" min="0" max="11" />


      
      <div className="checkboxes-container">
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">Include Uppercase Letters</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">Include Lowercase Letters</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">Include Numbers</label>
        </div>
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">Include Symbols</label>
        </div>
      </div>
      
      <StrengthGauge/>

      <button className="copy" type="button">
        GENERATE
      </button>
    </div>
  );
}

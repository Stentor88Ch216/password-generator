import StrengthGauge from "./StrengthGauge";
import { ArrowIcon } from "./Icons";
import "./Generator.css";

export default function Generator() {
  return (
    <div className="generator-container">


      <div className="slider-label">
        <p>Character length</p>
        <p className="length-number">0</p>
      </div>

      <input type="range" className="slider" name="length" min="0" max="11" />


      
      <div className="checkboxes-container">
        <div className="checkbox-label">
          <input type="checkbox" id="uppercase" name="scales" />
          <label htmlFor="uppercase">Include Uppercase Letters</label>
        </div>
        <div className="checkbox-label">
          <input type="checkbox" id="lowercase" name="scales" />
          <label htmlFor="lowercase">Include Lowercase Letters</label>
        </div>
        <div className="checkbox-label">
          <input type="checkbox" id="numbers" name="scales" />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-label">
          <input type="checkbox" id="symbols" name="scales" />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
      
      <StrengthGauge/>

      <button type="button" className="generate-button">
        <div className="generate-button-content">
          <p>GENERATE</p>
          <ArrowIcon />
        </div>
      </button>
    </div>
  );
}

import { useState } from "react";
import StrengthGauge from "./StrengthGauge";
import { ArrowIcon } from "./Icons";
import "./generator.css";
import { generatePassword, passwordStrength } from "../utils";


interface GeneratorProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function Generator(props: GeneratorProps) {

  const defaultParams = {
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  };

  const [params, setParams] = useState(defaultParams);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, length: parseInt(event.target.value) });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, [event.target.name]: event.target.checked });
  };

  return (
    <div className="generator-container">

      <div className="slider-label">
        <p>Character length</p>
        <p className="length-number">{params.length}</p>
      </div>

      <input
        type="range"
        className="slider"
        name="length"
        min="5"
        max="64"
        value={params.length}
        onChange={handleSliderChange}
      />
      
      <div className="checkboxes-container">

        <div className="checkbox-label">
          <input
            type="checkbox"
            id="includeUppercase"
            name="includeUppercase"
            checked={params.includeUppercase}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="uppercase">Include Uppercase Letters</label>
        </div>

        <div className="checkbox-label">
          <input
            type="checkbox"
            id="includeLowercase"
            name="includeLowercase"
            checked={params.includeLowercase}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="lowercase">Include Lowercase Letters</label>
        </div>

        <div className="checkbox-label">
          <input
            type="checkbox"
            id="includeNumbers"
            name="includeNumbers"
            checked={params.includeNumbers}
            onChange={handleCheckboxChange}
            />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="checkbox-label">
          <input
            type="checkbox"
            id="includeSymbols"
            name="includeSymbols"
            checked={params.includeSymbols}
            onChange={handleCheckboxChange}
            />
          <label htmlFor="symbols">Include Symbols</label>
        </div>

      </div>
      
      <StrengthGauge strength={passwordStrength(props.password)}/>

      <button
        type="button"
        className="generate-button"
        onClick={() => props.setPassword(
          generatePassword(
            params.length,
            params.includeUppercase,
            params.includeLowercase,
            params.includeNumbers,
            params.includeSymbols
        ))}
        disabled={params.includeUppercase || params.includeLowercase || params.includeNumbers || params.includeSymbols ? false : true}
      >
        <div className="generate-button-content">
          <p>GENERATE</p>
          <ArrowIcon />
        </div>
      </button>
    </div>
  );
}

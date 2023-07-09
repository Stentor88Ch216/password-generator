import { useState } from "react";
import "./styles.css";
import Password from "./components/Password";
import Generator from "./components/Generator";

export default function App() {

  const [password, setPassword] = useState("");

  return (
    <div className="app-container">
      <div className="App">
        <h1>Password Generator</h1>
        <Password password={password}/>
        <Generator setPassword={setPassword}/>
      </div>
    </div>
  );
}

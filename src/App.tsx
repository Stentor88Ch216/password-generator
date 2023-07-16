import { useState } from "react";
import "./global-styles.css"
import Password from "./components/Password";
import Generator from "./components/Generator";

export default function App() {

  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Password password={password}/>
      <Generator password={password} setPassword={setPassword}/>
    </div>
  );
}

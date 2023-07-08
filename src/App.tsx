import "./styles.css";
import Password from "./components/Password";
import Generator from "./components/Generator";

export default function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Password />
      <Generator />
    </div>
  );
}

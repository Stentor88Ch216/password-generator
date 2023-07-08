import "./Generator.css";

export default function Generator() {
  return (
    <div>
      <div>
        <p>Character length</p>
        <p>0</p>
      </div>

      <input type="range" id="volume" name="volume" min="0" max="11" />

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

      <button className="copy" type="button">
        GENERATE
      </button>
    </div>
  );
}

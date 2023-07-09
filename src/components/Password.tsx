import "./Password.css";
import { CopyIcon } from "./Icons";

export default function Password() {
    return(
        <div className="password-container">
            <p className="password">P4$5W0rD!</p>
            <button className="copy-button"><CopyIcon/></button>
        </div>
    );
}
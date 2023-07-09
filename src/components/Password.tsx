import "./Password.css";
import { CopyIcon } from "./Icons";
import { copyToClipboard } from "../utils";

interface PasswordProps {
    password: string;
}

export default function Password(props: PasswordProps) {
    return(
        <div className="password-container">

            <p className={props.password ? "password" : "password empty"}>
                {props.password ? props.password : "P4$5W0rD!"}
            </p>

            <button
                className="copy-button"
                onClick={() => copyToClipboard(props.password)}
            >
                <CopyIcon/>
            </button>
            
        </div>
    );
}
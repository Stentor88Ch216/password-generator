import "./Password.css";
import { CopyIcon } from "./Icons";

interface PasswordProps {
    password: string;
}

export default function Password(props: PasswordProps) {
    return(
        <div className="password-container">
            <p className={props.password ? "password" : "password empty"}>
                {props.password ? props.password : "P4$5W0rD!"}
            </p>
            <button className="copy-button"><CopyIcon/></button>
        </div>
    );
}
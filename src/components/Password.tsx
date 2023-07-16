import "./Password.css";
import { useEffect, useState } from "react";
import { CopyIcon } from "./Icons";
import { copyToClipboard } from "../utils";


interface PasswordProps {
    password: string;
}

export default function Password(props: PasswordProps) {

    const [clipboardMessage, setClipboardMessage] = useState("");

    useEffect(() => {
        setClipboardMessage("");
    }, [props.password]);

    return(
        <div className="password-container">

            <p className={props.password ? "password" : "password empty"}>
                {props.password ? props.password : "P4$5W0rD!"}
            </p>

            <div className="copy-button-container">

                <p className="copied-label">{clipboardMessage}</p>

                <button
                    className="copy-button"
                    onClick={() => copyToClipboard(props.password, setClipboardMessage)}
                >
                    <CopyIcon/>
                </button>
            </div>
        </div>
    );
}
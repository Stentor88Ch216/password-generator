import "./password.css";
import { useEffect, useState } from "react";
import { CopyIcon } from "./Icons";
import { copyToClipboard } from "../utils";


interface PasswordProps {
    password: string;
}

export default function Password(props: PasswordProps) {

    // State to display a message when the password is copied to the clipboard
    // Can be "COPIED" or "FAILED TO COPY"
    const [clipboardMessage, setClipboardMessage] = useState("");

    // Clear the clipboard message when password changes
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
                    disabled={!props.password}
                >
                    <CopyIcon/>
                </button>
            </div>
        </div>
    );
}
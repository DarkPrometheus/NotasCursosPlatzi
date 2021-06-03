import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [activo, setActivo] = useState("");

    const btnActivo = () => {
        if (activo === "") {
            setActivo("activo")
        }
        else {
            setActivo("")
        }
    }

    return (
        <div className="NavBar__content">
            <label onClick={btnActivo} className={activo}>
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
            </label>
            <ul className={activo}>
                <li><Link to="">Home</Link></li>
                <li><Link to="Nota">Nota</Link></li>
            </ul>
        </div>
    )
}

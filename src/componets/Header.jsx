import './Layout.css'
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <ul className="list">
                    <li className="links">
                        <li>Main</li>
                        <li>About</li>
                    </li>
                    <button onClick={() => navigate('/auth')} className="header_btn">exit</button>
                </ul>
            </div>

        </>
    )
}
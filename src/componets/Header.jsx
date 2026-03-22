import './Layout.css'
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <ul className="list">
                    <li onClick={() => navigate('/main/videos')}>videos</li>
                    <li onClick={() => navigate('/main')}>Д\З</li>
                </ul>
            </div>
        </>
    )
}
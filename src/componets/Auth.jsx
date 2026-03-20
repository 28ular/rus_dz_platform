import './auth.css'
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const Auth = () => {

    const [password, setPassword] = useState('')
    const [name,  setName] = useState('')
    const navigate = useNavigate();

    const passwords = ['king_nasir' , 'ular28']

    const auth = () => {
        if ( name.trim() === '' || password.trim() === '' ) {
            toast.warning('ошибка: заполните все поля')
            return
        }
        if ( passwords.includes(password) ) {
            navigate('/main')
        }else {
            toast.error('неверный пароль!')
            return
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className="auth_page">
            <div className="auth_wrapper">
            <h1>Welcome to Ular Platform!</h1>
                <p>Enter your Name and Password, to verify</p>
                <div className="inputs">
                    <input
                        className="inp"
                        type="text"
                        name=" password "
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="inp"
                        type="password"
                        name=" password "
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button  onClick={auth} className="buttons">sign in</button>
            </div>
            </div>
        </>
    )
}
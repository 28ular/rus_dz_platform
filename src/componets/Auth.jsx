import './auth.css'
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {MainPageList} from "../Pages/MainPage/MainPageList.jsx";

export const Auth = () => {

    const [password, setPassword] = useState('')
    const [name,  setName] = useState('')
    const navigate = useNavigate();
    const  [ oplata , setOplata ] = useState(true)
    const passwords = ['king_nasir' , 'ular28', 'imran123']

    const image = 'https://ibb.co/jPyqpJ9R'
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
            <h1>{ oplata ? 'Welcome to Ular Platform!' : 'оплатите' }</h1>
                <p>{ oplata ? 'Enter your Name and Password, to verify' : 'вы оплачиваете не из за того что улару жалко а вы платите за его огромный труд' }</p>
                { oplata && (
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
                ) }
                { !oplata &&  (
                    <button   onClick={() => window.open(image, "_blank")}  className="buttons">оплатить</button>
                ) }
                { oplata && (
                    <button onClick={auth } className="buttons">войти</button>
                ) }
            </div>
            </div>
        </>
    )
}
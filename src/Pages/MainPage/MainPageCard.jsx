import './main.css'
import data from '../../db/dz.json'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const MainPageCard = ({ d }) => {

    const isPust = !d.image || d.image === ''

    const navigate = useNavigate()

    const [modal, setModal] = useState(false)

    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <>
        <div className="card">
            <div className="card_header">
                <span className="id">#{d?.id}</span>
                <span style={{ color: 'green' }}  className="provereno">проверено</span>

            </div>
            <h2 className="title">{d?.title}</h2>
            <p className="description">{d?.description}</p>
            <div className="card_footer">
                <span className="deadline">📅 {d?.deadline}</span>
                {
                    d?.completed && (
                        <button onClick={open} className="buttonss">посмотреть резул</button>
                    )
                }
                <button disabled={isPust} className={ isPust ? 'pust' : 'buttons' } onClick={() => window.open(d.image, "_blank")}>открыть файл</button>
            </div>
            {
                modal && (
                    <>
                    <div className="card_modal">
                        <div className="header_prov">
                            <button onClick={close}>❌</button>
                        </div>
                        <hr/>
                        <p style={{ color: 'grey' , marginBottom: 10 }}>{ d.prov }</p>
                        <span
                            className="grade">{`проверено:${d?.grade}/10 баллов `}</span>
                    </div>
                    </>
                )
            }

        </div>

        </>

    );
};

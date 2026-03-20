import './main.css'
import data from '../../db/dz.json'
import {useState} from "react";

export const MainPageCard = ({ d }) => {

    const isPust = !d.image || d.image === ''

    return (
        <div className="card">
            <div className="card_header">
                <span className="id">#{d?.id}</span>
                <span className="grade">⭐ {d?.grade}</span>
            </div>
            <h2 className="title">{d?.title}</h2>
            <p className="description">{d?.description}</p>
            <div className="card_footer">
                <span className="deadline">📅 {d?.deadline}</span>
                <button disabled={isPust} className={ isPust ? 'pust' : 'buttons' } onClick={() => window.open(d.image, "_blank")}>открыть файл</button>
            </div>
        </div>
    );
};

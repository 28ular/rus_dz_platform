import './main.css'

export const MainPageCard = ({ d }) => {
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
                <button className="buttons" onClick={() => window.open(d.image, "_blank")}>открыть файл</button>
            </div>
        </div>
    );
};

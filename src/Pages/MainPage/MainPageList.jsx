import data from '../../db/dz.json'
import {MainPageCard} from "./MainPageCard.jsx";

export const MainPageList = () => {
    return (
        <>
            <div className="mains">
                    <h1 className="h1_">Main</h1>
                <div className="main_wrapper">
                    <hr/>
                    <div className="content">
                        {
                            data?.lessons.map((d) => <MainPageCard d={d} key={d?.id} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
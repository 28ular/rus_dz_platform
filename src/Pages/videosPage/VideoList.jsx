import videos from './dbs/videos.json'
import cls from './videos.module.css'
import {useState} from "react";



export const VideoList = () => {

    const [index , setIndex] = useState(0)

    const [animation , setAnimation] = useState(false)

    const data = videos.items

    const getEmbedUrl = (url) => {
        const id = url.split('/youtu.be')[1]
        return `https://www.youtube.com/embed/${id}`
    }

    const nextSlide = () => {
        setAnimation(true)
        if (index === data.length - 1) {
            setIndex(0)
        }else {
            setIndex(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        setAnimation(false)
        if (index === 0) {
            setIndex(data.length - 1)
        }else {
            setIndex(prev => prev - 1)
        }
    }

    return  (
        <>
            <div className={cls.videos_wrapper}>
                <button onClick={prevSlide} className={cls.button}>prev</button>
                <div className={cls.video_card}>
                    <div className={cls.id}>
                        <span>{ `lesson: ${data[index]?.id}`  }</span>
                        <span>{ `тема: ${data[index].description}` }</span>
                    </div>
                    <hr className={cls.hr}/>
                    <div className={cls.title}>
                        {data[index].title}
                    </div>
                    <div  className={ `
                    ${cls.videos}
                    ${animation ?  cls.next : cls.prev}
                    ` } key={index}>
                        <iframe
                            width="700"
                            height="400"
                            src={getEmbedUrl(data[index]?.url)}
                            title={data[index]?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <button className={cls.button} onClick={nextSlide}>next</button>
            </div>

        </>
    )
}
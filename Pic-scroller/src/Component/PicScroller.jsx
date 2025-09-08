import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


function PicScroller({ url, page, limit }) {

    const [images, setimages] = useState([])
    const [currentSlide, setcurrentSlide] = useState(0)
    const [errormsg, seterrormsg] = useState(null)
    const [loading, setloading] = useState(false)


    async function fetchimages(geturl) {

        try {
            setloading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setimages(data)
                setloading(false)
            }

        } catch (error) {
            seterrormsg(error.message)
            setloading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchimages(url)
    }, [url]);
    console.log(images);


    if (loading) {
        return <div>loading data please wait..</div>
    }
    if (errormsg !== null) {
        return <div>Error Occurred !{errormsg}</div>
    }

    return (

        <div className=''>
            <BsArrowLeftCircleFill
                className=''
            />
            {images && images.length ?
                images.map((imageItem) => {
                  return(
                    <img
                        className='w-80 '
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                    />)
                })
                : null}

            <BsArrowRightCircleFill
                className=''
            />
            <span className=''>
                {images && images.length ?
                    images.map((_, index) => {
                        <button
                            key={index}
                            className=''
                        >

                        </button>
                    })
                    : null}
            </span>


        </div>

    )
}

export default PicScroller
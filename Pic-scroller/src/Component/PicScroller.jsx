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

    function handlePrevious() {
        setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return (

        <div className="relative flex justify-center items-center w-[600px] h-[450px]">

            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="absolute left-[1rem] w-[2rem] h-[2rem] text-white drop-shadow-[0_4px_6px_rgba(85,85,85,0.5)]"


            />
            {images && images.length ?
                images.map((imageItem, index) => {
                    return (
                        <img
                            className={
                                currentSlide === index
                                    ? "rounded-2xl shadow-lg w-full h-full"
                                    : "hidden"
                            }
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                        />)
                })
                : null}

            <BsArrowRightCircleFill
                onClick={handleNext}
                className='right-[1rem] absolute w-[2rem] h-[2rem] text-white  drop-shadow-[0_4px_6px_#555]'
            />
            <span className='felx absolute bottom-[1rem]'>
                {images && images.length ?
                    images.map((_, index) => {
                        return (<button
                            key={index}
                            className={currentSlide === index ?"bg-white h-[15px] w-[15px] rounded-md border-none outline-none mx-[0.2rem] cursor-pointer":
                                "bg-gray-700 h-[15px] w-[15px] rounded-md border-none outline-none mx-[0.2rem] cursor-pointer"
                            }
                            onClick={()=>setcurrentSlide(index)}
                        >

                        </button>)
                    })
                    : null}
            </span>


        </div>

    )
}

export default PicScroller
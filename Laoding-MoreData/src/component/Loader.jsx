import React, { useEffect, useState } from 'react'

function Loader() {

    const [loading, setloading] = useState(false);
    const [products, setproducts] = useState([]);
    const [count, Setcount] = useState(0);
    const [disablebutton, setdisablebutton] = useState(false);

    async function feactingProducts() {
        try {
            setloading(true)
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);

            const result = await res.json();

            if (result && result.products && result.products.length) {
                setproducts((prevData) => [...prevData, ...result.products])
                setloading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
        }



    }


    useEffect(() => {

        feactingProducts();

    }, [count])
    useEffect(() => {
        if (products && products.length >= 100) setdisablebutton(true);
    }, [products])

    if (loading) {
        return <div>loading Data Please Wait</div>
    }

    return (
        <div className='flex flex-col gap-[20px]'>


            <h1 className='text-3xl font-bold uppercase '>Loader</h1>

            <div className='grid grid-cols-4 gap-[10px]'>
                {products && products.length ? products.map(item => <div className='p-[20px] border-[1px]  flex flex-col gap-[10px]'
                    key={item.id}>
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                    />
                    <p>{item.title}</p>
                </div>) : null}
            </div>
            <div>
                <button
                    disabled={disablebutton}
                    onClick={() => Setcount(count + 1)}
                    className={disablebutton?"bg-gray-700 text-white text-center uppercase rounded-2xl p-2 w-50":"bg-blue-700 text-white text-center uppercase rounded-2xl p-2 w-50"}>
                    load more Products
                </button>
                {disablebutton ? <p className='text-center p-5 font-bold uppercase'>You reached to the limit</p> : null}
            </div>
        </div>

    )
}

export default Loader
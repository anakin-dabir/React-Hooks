import { useEffect, useState } from "react";

export const Next = () => {

    //const [width, setWidth] = useState(window.innerWidth);
    const [dat, setDat] = useState(0);
    useEffect(() => {
        // window.addEventListener('resize', () => {
        //     setWidth(window.innerWidth);
        // })

        // const func = async () => {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //     const data = await res.json();
        //     setDat(data);
        // };
        // func();
        console.log(`${dat} renders`)
        return () => console.log('renders ended...')

    }, [dat])


    return (
        <>
            {/* <h4>{JSON.stringify(dat)}</h4>
            <p> Inner width: {width}</p> */}
            <p>{dat}</p>
            <button onClick={() => setDat(n => n + 1)}>~</button>
        </>
    )



}

// export default Next;
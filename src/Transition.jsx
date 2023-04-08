import { useCallback, useRef, useState, useTransition } from "react";

export const Transition = () => {

    const [res, setRes] = useState([])
    const a = useRef(null);
    const [isLoading, start] = useTransition();
    const handle = (e) => {
        if (e.key == 'Enter') {
            a.current.blur();
        }
    }


    const data = ['name', 'jarvis', 'khalistan'];
    const funct = (e) => {
        start(() => {
            if (e.target.value.length === 0) { setRes([]); return };
            const result = data.filter(data => data.includes(e.target.value));
            setRes(result);
        })
    }




    return (
        <>
            <input type="text" ref={a} onChange={funct} onKeyDown={handle} />

            {
                isLoading ? "Loading..." :
                    res.map((li, i) => {
                        return <p key={i}>{li}</p>
                    })
            }

        </>
    )

}






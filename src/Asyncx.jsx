

import { useCallback, useEffect, useMemo, useState } from "react"


// useMemo kice b calculation ko cache krnay k liye hai starting me hi function ko run kr k calculation cache kr leta hai
// useCallback jab hme poora function hi cache krna ho tab hm ise use krtay hain
export const Asynx = () => {
    /*
        const [state, setState] = useState(0);
        const [x, setx] = useState(100);
        //console.log(`Component re-rendered ${state} times`)
    
        // useEffect(() => {
        //     console.log(`UseEffect Rendered`)
        // }, [])
    
        const calculation = (x, state) => {
            console.log(`This function re-rendered which was cached by useMemo ${x + state}`);
            return x + state;
        }
        const calculatedValue1 = useMemo(() => calculation(x, state), [x]);
        //const calculatedValue = useMemo(() => (a) => { return x + state + a }, [state]);
        // ab ye kuta kaam menay useMemo se kia hai k poora function memorize kr liya to is k liye callback Bana hai jismem nesting vala kaam nahi hota
        const calculatedValue = useCallback((a) => {
            console.log(`rerendering callback ${a}`);
            return x + state + a;
        }, [state]);
    
    
    
    
    
    
    
    
    
        return (
            <>
                <p>Here is the understanding of the fucking re-rendering</p>
                <button onClick={() => setState(prev => prev + 1)}>Re-render</button>
                <h1>{state}</h1><span>Yaha Pr poora component re-render hota hai</span>
                <p>Calculated Value: {calculatedValue1}</p>
            </>
        )
    
        */
}


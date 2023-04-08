// useRef Hook asi cheez ko refer krti hai that’s not needed for rendering & renders k drmayan value ko b yaad rakhti hai 
// unlike local variables jo destroy ho jatay hain

import { useRef, useState } from "react";



const Ref = () => {
    const name = useRef(null);
    const btn = useRef(0);
    const clr = useRef(null);
    const [Name, setName] = useState('');
    const [isName, setIsName] = useState(false);
    const work = (e) => {
        e.preventDefault();
        console.log(`Clicked ${++btn.current} times`)
        if (name.current.value !== "") {
            setName(name.current.value);
            setIsName(true);
            name.current.value = "";
            clr.current.style.color = 'green';

        }
        else {
            setName("Please Enter Name");
            setIsName(false);
        }
    }
    return (
        <>
            <form>
                <input type="text" ref={name} placeholder="Enter name here" />
                <input type="submit" value="CLICK" onClick={work} />
            </form>
            <div ref={clr}>
                {isName && <span>My Name is: </span>} {Name}
            </div>
        </>
    )

}

export default Ref;
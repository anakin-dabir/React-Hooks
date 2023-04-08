import { useCustomHook } from "./useCustomHook";
import { memo, useState } from "react";

/*custom hook provide 
                    [
                     state = [{ name: '', toggle: '' }], 
                     action: { add(data), remove(id), toggle(id), edit(data,id)}
                    ]
*/

export const CustomHook = () => {
    const [state, action] = useCustomHook([]);
    return (
        <>
            <div className="container alert alert-secondary" role="alert">
                <InputTextArea action={action} />
                <div className=" alert alert-info" role="alert">
                    <InputShow data={state} action={action} />
                </div>
            </div>
        </>
    )
}






const InputTextArea = memo(({ action }) => {
    const [state, setState] = useState('');
    return (
        <>
            <div className="w-50 alert alert-secondary input-group mb-3" role="alert">
                <input className="form-control" type="text" placeholder="Add Todo" onChange={(e) => setState(e.target.value)} />
                <button className="btn btn-outline-success" onClick={() => action.add(state)}>Save</button>
            </div>
        </>
    )
})

const InputShow = ({ data, action }) => {
    if (data.length === 0) {
        return;
    }
    return (
        <>
            <h4>TO-DO's</h4>
            {data.map((data, index) => {
                return (
                    <div key={index}>
                        <Task data={data} id={index} action={action} />
                    </div>
                )
            })}
        </>
    )
}

const Task = ({ data, action, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(data.name);
    return (
        <div>


            {isEditing ?

                <div className="w-50 alert alert-info input-group mb-3" role="alert">
                    <input className="form-control" placeholder="Edit todo" value={text} type="text" onChange={(e) => setText(e.target.value)}></input>
                    <button className="btn btn-outline-success" onClick={() => {
                        setIsEditing(prev => !prev);
                        action.edit(text, id)
                    }}>Save</button>
                </div>

                :
                <>
                    {data.toggle ?
                        <div className=".d-inline-flex">
                            <p className=".fs-3 text"><del>{data.name}</del></p>
                            <button className="btn btn-outline-danger" onClick={() => action.remove(id)}>Remove</button>
                            <button className="btn btn-outline-secondary" onClick={() => action.toggle(id)}>Toggle</button>
                        </div> :
                        <div className=".d-inline-flex">
                            <p className=".fs-3 text">{data.name}</p>
                            <button className="btn btn-outline-danger" onClick={() => action.remove(id)}>Remove</button>
                            <button className="btn btn-outline-secondary" onClick={() => action.toggle(id)}>Toggle</button>
                            <button className="btn btn-warning" onClick={() => setIsEditing(prev => !prev)}>Edit</button>
                        </div>
                    }
                </>
            }
        </div>
    )
}


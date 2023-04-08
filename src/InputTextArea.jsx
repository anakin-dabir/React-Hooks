// import { memo, useState } from "react";


// export const InputTextArea = memo(({ funct }) => {
//     const [state, setState] = useState('');
//     return (
//         <>
//             <input type="text" placeholder="Add Todo" onChange={(e) => setState(e.target.value)} />
//             <button onClick={() => funct({ type: 'add-todo', text: state })}>Save</button>
//         </>
//     )
// })

// export const InputShow = ({ data, dispatch }) => {
//     if (data.length === 0) {
//         return;
//     }
//     return (
//         <>
//             <h4>TO-DO's</h4>
//             {data.map((data, index) => {
//                 return (
//                     <div key={index}>
//                         <Task data={data} id={index} dispatch={dispatch} />
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// const Task = ({ data, dispatch, id }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [text, setText] = useState(data.text);
//     return (
//         <>
//             {isEditing ?
//                 <>
//                     <input placeholder="Edit todo" value={text} type="text" onChange={(e) => setText(e.target.value)}></input>
//                     <button onClick={() => {
//                         setIsEditing(prev => !prev);
//                         dispatch({ type: 'edit', id: id, data: { ...data, text: text } })
//                     }}>Save</button>
//                 </>
//                 :
//                 <>
//                     {data.toggle ?
//                         <>
//                             <p><del>{data.text}</del></p>
//                             <button onClick={() => dispatch({ type: 'delete', id: id })}>Delete</button>
//                             <button onClick={() => dispatch({ type: 'toggle', id: id })}>Toggle</button>
//                         </> :
//                         <>
//                             <p>{data.text}</p>
//                             <button onClick={() => dispatch({ type: 'delete', id: id })}>Delete</button>
//                             <button onClick={() => dispatch({ type: 'toggle', id: id })}>Toggle</button>
//                             <button onClick={() => setIsEditing(prev => !prev)}>Edit</button>
//                         </>
//                     }
//                 </>
//             }
//         </>
//     )
// }


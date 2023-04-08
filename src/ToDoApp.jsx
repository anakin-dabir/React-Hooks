import { useReducer } from "react";
//import { InputTextArea, InputShow } from './InputTextArea';

const ToDoApp = () => {
    // const initialTodo = () => {
    //     const initialValue = JSON.parse(localStorage.getItem('toDos'));
    //     if (initialValue) return initialValue;
    //     return [];
    // }

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'add-todo':
    //             return [...state, { text: action.text, toggle: false }];
    //         case 'delete':
    //             return state.filter((state, index) => index !== action.id);
    //         case 'toggle':
    //             return state.map((state, index) => {
    //                 return (index === action.id) ? { ...state, toggle: !state.toggle } : state;
    //             })
    //         case 'edit':
    //             return state.map((state, index) => {
    //                 return index === action.id ? action.data : state;
    //             })
    //     }
    // }



    // const [state, dispatch] = useReducer(reducer, initialTodo());
    // console.log(state);
    // localStorage.setItem('toDos', JSON.stringify(state));
    // return (
    //     <>
    //         <InputTextArea funct={dispatch} />
    //         <InputShow data={state} dispatch={dispatch} />
    //     </>
    // )
}
export default ToDoApp; 
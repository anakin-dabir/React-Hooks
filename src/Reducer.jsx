import { useReducer } from "react";


const Reducer = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { age: state.age + 1 };
            case 'decrement':
                return { age: state.age - 1 };
        }
    }
    const getInitialValue = () => {
        let initialValue = JSON.parse(localStorage.getItem('age'));
        if (initialValue) return initialValue;
        return { age: 0 }
    }


    const [state, dispatch] = useReducer(reducer, getInitialValue());





    const increment = () => {
        dispatch({ type: 'increment' });
    }
    const decrement = () => {
        dispatch({ type: 'decrement' });
    }

    localStorage.setItem("age", JSON.stringify(state));

    return (
        <>
            <button onClick={decrement}>-</button>
            <h3>Age of person is: {state.age}</h3>
            <button onClick={increment}>+</button>





        </>




    )
}





export default Reducer;
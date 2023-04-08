

import { useReducer, useId } from "react";

export const useCustomHook = (value) => {
    const id = useId();
    const getInitialValue = () => {
        const data = JSON.parse(localStorage.getItem(id));
        if (data) return data;
        if (value instanceof Function) return value();
        return value;
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, { name: action.data, toggle: false }];
            case 'delete':
                return state.filter((data, index) => index !== action.id);
            case 'edit':
                return state.map((data, index) => {
                    return index === action.id ? { ...data, name: action.data } : data;
                })
            case 'toggle':
                return state.map((data, index) => {
                    return index === action.id ? { ...data, toggle: !data.toggle } : data;
                })
        }
    }
    const [state, dispatch] = useReducer(reducer, getInitialValue());
    localStorage.setItem(id, JSON.stringify(state));
    const add = (data) => {
        dispatch({ type: 'add', data: data });
    }
    const remove = (index) => {
        dispatch({ type: 'delete', id: index });
    }
    const edit = (data, index) => {
        dispatch({ type: 'edit', data: data, id: index });
    }
    const toggle = (index) => {
        dispatch({ type: 'toggle', id: index });
    }

    return [state, { add, remove, edit, toggle }]
}

import React from 'react';

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const usePerson = () => {
    const person = React.useContext(StateContext);

    if (!person) throw new Error(`Cannot use '${usePerson.name}' outside of a ${PersonContext.name} provider!`);

    return person;
};

export const usePersonDispatch = () => {
    const setPerson = React.useContext(DispatchContext);

    if (!setPerson) throw new Error(`Cannot use '${usePersonDispatch.name}' outside of a ${PersonContext.name} provider!`);

    return setPerson;
};

usePersonDispatch.TARGETS = { NAME: 'name', EMAIL: 'email' };

const reducer = (state, action) => {
    switch (action.target) {
        case 'name': {
            return { ...state, [action.target]: action.payload };
        }
        case 'email': {
            // can do validation here if desired
            return { ...state, [action.target]: action.payload };
        }
        default:
            // throw new Error();
            console.warn(`Target '${action.target} is not a valid target!`);
            return state;
    }
};

export default function PersonContext({ children }) {
    const [state, setState] = React.useReducer(reducer, { name: 'Name', email: 'example@mail.com' });

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={setState}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

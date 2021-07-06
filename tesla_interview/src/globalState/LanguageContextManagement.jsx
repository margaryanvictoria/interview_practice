import React from 'react'

export const LanguageContext = React.createContext({
    language: 'en',
    setLanguage: () => {}
})

export const LanguageContextProvider = (props) => {
    const setLanguage = (lang) => {
        setState({...state, language: lang})
    }

    const initState = {
        language: 'en',
        setLanguage: setLanguage
    }

    const [state, setState] = React.useState(initState)

    return (
        <LanguageContext.Provider value={state}>
            {props.children}
        </LanguageContext.Provider>
    )
}
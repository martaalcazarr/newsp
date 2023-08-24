import { useEffect, useState, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    return(
        <NewsContext.Provider
            value={{}}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext
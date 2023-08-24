import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])

    useEffect(() =>{
        const askAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNews(data.articles)
        }
        askAPI()
    }, [category])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return(
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext
import axios from "axios";
import { useEffect, useState, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() =>{
        const askAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)
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
                news,
                totalNews
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
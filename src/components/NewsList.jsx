import {Grid, Typography} from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News"

const NewsList = () => {

    const {news} = useNews()

  return (
    <>
    <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component="h2"
    >
        Latest News 
    </Typography>

    <Grid>
        {news.map(news => (
            <News
                key={news.url}
                news={news}
            />
        ))}
    </Grid>
    </>
  )
}

export default NewsList
import {Grid, Typography, Pagination, Stack} from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News"

const NewsList = () => {

    const {news, totalNews} = useNews()
    //para redondear hacia arriba con math.ceil
    const totalPages = Math.ceil(totalNews / 20)
    

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

    <Grid
        container
        spacing={2}
    >
        {news.map(news => (
            <News
                key={news.url}
                news={news}
            />
        ))}
    </Grid>
    <Stack
        sx={{
            marginY: 5
        }}
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
    >
        <Pagination count={totalPages} color="secondary" />
    </Stack>
    
    </>
  )
}

export default NewsList
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Link, 
  Typography, 
  Grid 
} from "@mui/material"

const News = ({news}) => {

  const {urlToImage, url, title, description, source} = news

  return (
    <Grid
      item
      md={6} lg={4}
    >
      <Card>
        {urlToImage && (
          <CardMedia 
            component="img"
            alt={`Image from ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}
          
          <CardContent>
            <Typography
              variant="body1"
              color="error"
            >
              {source.name}
            </Typography>

            <Typography
              variant="h5"
              component="div"
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
            >
              {description}
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href={url}
              //para salir de la pagina e ir a otra pestaña, no en la misma pagina
              target="_blank"
              variant="button"
              color={'primary'}
              width={'100%'}
              textAlign={'center'}
              sx={{
                textDecoration: 'none'
              }}
            >
            Read more
            </Link>
          </CardActions>
        </Card>
    </Grid>
 
  )
}

export default News
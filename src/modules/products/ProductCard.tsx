import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import { Product } from '../../types/Product';
import AxiosDeleteNotebook from '../../infrastructure/api/AxiosDeleteNotebook';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProductCard({
  id,
  description,
  model,
  img,
  price,
}: Product): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  async function removeNotebook(idNotebook: number): Promise<void> {
    const confirmDelete = window.confirm('Deseja deletar o registro?');
    if (confirmDelete) {
      const axiosDeleteNotebook = new AxiosDeleteNotebook();
      const resultDeleteNotebook = await axiosDeleteNotebook.remove(idNotebook);
      if (resultDeleteNotebook.body.data.status) {
        alert(resultDeleteNotebook.body.data.message);
        history.push('/admin');
      }
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://webscraper.io/${img}`}
          title="Contemplative Reptile"
          style={{ width: '128px' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ minHeight: '80px' }}
          >
            {model}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ minHeight: '120px' }}
          >
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/admin/product/edit/${id}`}
          color="primary"
        >
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => removeNotebook(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

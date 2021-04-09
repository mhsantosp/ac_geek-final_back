import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './home.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Perfil from '../../images/perfil.jpg';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5, 0),
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 400,
    boxShadow: '0 1px 5px 6px rgba(176, 105, 255, .3)',
  },
  menuList: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  menuItem: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    borderRadius: '50%',
    padding: '.5rem',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(33, 203, 243, .3)',
      boxShadow: 'none',
    },
  },
}));

export default function FixedContainer() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="home">
      <CssBaseline />
      <article className={classes.content}>
        <div className={classes.drawerHeader} />
        <Container maxWidth="xs">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className={classes.card} id="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={Perfil}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4">Maria Helena</Typography>
                    <Typography gutterBottom variant="h5">Santos Pineda</Typography>
                    <Typography component="p" color="textSecondary">Desarrolladora Front End con enfasis en React.js</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <MenuList className={classes.menuList}>
                    <MenuItem className={classes.menuItem}>
                      <Link href="https://github.com/mhsantosp/" color="inherit" className="cv" ><GitHubIcon fontSize="large" /></Link>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                      <Link href="https://www.linkedin.com/in/msantospineda/" color="inherit" className="cv" ><LinkedInIcon fontSize="large" /></Link>
                    </MenuItem>
                  </MenuList>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </article>
    </section>
  );
}

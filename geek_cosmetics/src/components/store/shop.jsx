import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Items from './shoppingArticle';
import Cart from './shoppingCart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Items />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Cart />
        </Grid>
      </Grid>
    </div>
  );
}

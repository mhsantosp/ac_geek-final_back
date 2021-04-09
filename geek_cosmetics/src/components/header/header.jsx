import React from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
  },
  menucontent: {
    justifyContent: 'space-between',
  },
  menuList: {
    display: 'flex',
  },
  menuLink: {
    whiteSpace: 'normal',
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.menucontent} variant="dense">
        <Typography variant="h6">
          <Link className="menu" href="/" color="inherit">Geek Cosmetics</Link>
        </Typography>
        <MenuList className={classes.menuList}>
          <MenuItem>
            <Link className="menu" href="/tienda" color="inherit">Tienda</Link>
          </MenuItem>
          <MenuItem>
            <Link className="menu" href="#" color="inherit">Total compra</Link>
          </MenuItem>
        </MenuList>
      </Toolbar>
    </AppBar>
  );
}

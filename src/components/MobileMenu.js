import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ListItem, ListItemText, List, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => (
  {
    root: {
      '& .MuiMenu-root': {
        margin: theme.spacing(1),
        width: '35ch',

      },
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',

      padding: '1ch',
      flexDirection: 'row',
      top: '10vh !important',
    },
    signupdiv: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '2ch',
    },
    signupcard: {
      width: '40ch',
      paddingTop: '2ch',
      paddingBottom: '2ch',
    },
    signupbtn: {
      width: '35ch',
      marginTop: '1ch',
      color: 'white',
      fontWeight: '300',
      backgroundColor: '#7bc043'
    },
    input: {
      display: 'none',
    },
    signuptext: {
      padding: '0',
    }

  }
));

const MobileMenu = (props) => {

  const classes = useStyles();

  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    props.setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    props.setMobileMoreAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}

      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.root}
    >
      <div><Typography variant='h4' component='h4'>Create new profile</Typography></div>
      <MenuItem
        onClick={handleMobileMenuClose}
      >
        <IconButton aria-label="show 4 new mails" color="inherit">

          <ListItemAvatar>
            <Badge badgeContent={4} color="secondary">
              <Avatar>
                <MailIcon />
              </Avatar>
            </Badge>
          </ListItemAvatar>

        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <ListItemAvatar>
            <Badge badgeContent={11} color="secondary">
              <Avatar >
                <NotificationsIcon />
              </Avatar>
            </Badge>
          </ListItemAvatar>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Collapse, Divider, Paper } from '@material-ui/core';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import Youtube from 'react-youtube';


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '1rem',
  },

  card: {
    maxWidth: 'auto',
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    fontSize: '14px',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  divicon: {
    display: 'flex', alignItems: 'center',
    // paddingLeft: '3rem', paddingRight: '3rem',
    color: '#4a4e4d',
    padding: theme.spacing(0.5, 1),
    borderRadius: '0.3rem',
    '&:hover': {
      backgroundColor: '#eee',
      cursor: 'pointer',
    }
  },
  iconright: {
    marginRight: '0.5rem',
    fill: '#afafaf',
    cursor: 'pointer',
  },
  divider: {
    margin: theme.spacing(0, 2),

  },
  forminput: {
    backgroundColor: '#eee',
    borderRadius: '1.5rem',
    paddingTop: '0.3rem',
    width: '100%',
    marginLeft: '0.5rem',
  },

  outlineinput: {
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: '#eee',
    padding: theme.spacing(0, 1),

    width: '100%',
  },
  divinput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '1rem',
    marginLeft: '1rem',
    paddingTop: '2px',
  },
  divcontent: {
    display: 'flex',
  },
  imgStyle: {
    width: '2rem', height: '2rem', borderRadius: '50%',
    '&:hover': { cursor: 'pointer', }
  },

  textWrap: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#eee',
    marginBottom: '0rem',
    width: 'fit-content', marginRight: 'auto',
    borderRadius: '1rem', flexWrap: 'wrap',
    paddingLeft: '1rem', paddingRight: '1rem',
    paddingBottom: '0rem', paddingTop: '0rem',
    textAlign: 'left',
    justifyContent: 'left',
  },
  spantext: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    fontSize: '14px',
  },
  divOver: {
    display: 'flex', width: 'fit-content'
  },
  imgurl: {
    width: '2rem', height: '2rem', borderRadius: '50%', marginRight: '0.3rem'
  },
  spanbsdot: {
    fill: '#aaa', paddingTop: '0.3rem'
  },
  overIcon: {
    display: 'none',
  },
  icons: {
    width: '1.2rem',
    height: '1.2rem',
    marginRight: '0.5rem',
    fill: '#afafaf',
    cursor: 'pointer',
  }

}));

const opts = {
  heigth: 'auto',
  width: '100%',
  playerVars: {
    autoplay: 0,
  }
}

export default function PublicPost({ items }) {
  const classes = useStyles();

  const [profile, setProfile] = useState({ name: '', url: '', });
  const [input, setInput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [movieInfo, setMovieInfo] = useState({});
  const [result, setResult] = useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [comment, setComment] = useState([]);
  const [moreIcon, setMoreIcon] = useState(false);
  const [comInfo, setComInfo] = useState(null);
  const [likeicons, setLikeicons] = useState(null);



  const handleChange = (e) => {
    e.preventDefault();
    let data = e.target.value;
    setInput(data)

  };

  const enableInput = () => {

  }

  const handleAnchor = (e) => {
    setAnchorEl(e.currentTarget)
  }

  //method will handle option menu
  const handleOption = (e) => {
    setAnchorEl1(e.currentTarget)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleComments = () => {
    setExpanded(!expanded);
    document.getElementById('inputcomment').focus();

  }
  const sendComment = async (e) => {
    e.preventDefault();


  };

  const dateFormatter = (v) => {
    const oldDate = new Date(Number(v));
    let oldDays = oldDate.getDate();
    let oldHrs = oldDate.getHours();
    let oldMnts = oldDate.getMinutes();

    const currentDate = new Date();
    let currentDays = currentDate.getDate();
    let currentHrs = currentDate.getHours();
    let currentMnts = currentDate.getMinutes();

    let days = currentDays - oldDays;
    let hrs = currentHrs - oldHrs;
    let mnts = currentMnts - oldMnts;

    if (days >= 1 && days < 5) {
      return days + 'd';
    } else if (hrs > 0) {
      return hrs + 'h';
    }
    else if (mnts > 0) {
      return mnts + 'm'
    }
  }

  const handleOver = (value, id) => {
    document.getElementById(id).style.display = value;
  };

  const handleMoreIcon = (e, item) => {
    setMoreIcon(e.currentTarget);
    setComInfo({ postId: items.id, commentId: item.commentId, uid: item.uid })
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <form>
              <div style={{ display: 'flex', margin: 0, padding: 0, borderRadius: '1rem', backgroundColor: '#eee', paddingBottom: '0.2rem', paddingTop: '0.1rem' }}>
                <input type='text' id='inputcomment'
                  autoComplete='off'
                  multiple
                  value={input}
                  onChange={handleChange}
                  placeholder='Write a comment'
                  style={{ marginLeft: '0.5rem', width: '100%', border: 'none', outline: 'none', backgroundColor: '#eee' }}
                />
                <button type='submit'
                  onClick={sendComment} style={{ border: 'none' }}></button>
                <div style={{
                  display: 'flex', paddingTop: '0.1rem', alignItems: 'center',
                }}>

                  <EmojiEmotionsOutlinedIcon
                    onClick={handleAnchor}
                    className={classes.icons} />

                  <CameraAltOutlinedIcon className={classes.icons} />

                  <GifOutlinedIcon style={{ border: '1px solid #afafaf', borderRadius: '0.4rem', width: '0.9rem', height: '0.9rem' }} className={classes.icons} />

                  <NoteOutlinedIcon className={classes.icons} />

                </div>
              </div>
            </form>

          </CardContent>
        </Card>
      </Paper>

    </div >
  );
}


import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

//import Player from '../components/Player';
import Spotify from './Spotify';
import image from '../assets/img/basquiat.jpg'
import yt_spo from '../assets/img/yt-spo.png'


const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.titleContainer}>
          <h1 className={classes.h1_title}>Hakken-suru</h1>
          <h3 className={classes.h3_title}>A Badass All In One Plateform.</h3>
        </div>
      </div>
      <div className={classes.main}>
        <h2 className={classes.h2_title}>A place to have it all</h2>
        <img src={yt_spo} alt="" />
        <Spotify />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {},
  h1_title: {
    margin: theme.spacing(0),
    color: theme.palette.background.default,
    fontSize: theme.heading.font.h1,
    fontWeight: '600',
  },
  h2_title: {
    fontSize: theme.heading.font.h2,
  },
  h3_title: {
    margin: theme.spacing(0),
    fontSize: theme.heading.font.h3,
    color: theme.palette.background.default,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '90vh',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  titleContainer: {
    width: '1400px',
    margin: '0 auto',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(10, 0),
  },
}));

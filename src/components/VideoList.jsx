import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoListItem from '../components/VideoList_item';

const VideoList = (props) => {
   const classes = useStyles();
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className={classes.listContainer}>{videoItems}</ul>;
};

export default VideoList;


const useStyles = makeStyles((theme) => ({
  listContainer: {
    //backgroundColor: theme.palette.background.btn
  },
}));

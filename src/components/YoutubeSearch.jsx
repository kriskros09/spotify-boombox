import _ from 'lodash';

import React, { useState, Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';
const API_KEY = 'AIzaSyCIysWg9hND09mrJIMFM5abU5Y4O52B1vc';

//for exmaple

class YoutubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('react js');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="youtube-sresults">
        <h5>Youtube Search:</h5>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


// import _ from 'lodash';

// import React, { useState } from 'react';
// import YTSearch from 'youtube-api-search';

// import SearchBar from './SearchBar';
// import VideoList from './VideoList';
// import VideoDetail from './VideoDetails';
// const API_KEY = 'AIzaSyBC4qU6MGPTQIAfenPU_UiSWzeQlbdjt6M';

// // Si es asi, lo pasa en props
// // const MyComponent = props => {
// //   const [state, setState] = useState({...props})

// // return (
// // <span>state.name</span>
// // )}

// const YoutubeSearch = props => {
//   // const [term, setTerms] = useState({
//   //   term: 'joe rogam'
//   // })
//   const [videos, setVideos] = useState({
//     ...props,
//     videos: videos,
//     selectedVideo: null,
//     term: 'joe rogan',
//   });
//   // const [videos, setSelectedVideo] = useState( videos[0] )
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     videos: [],
//   //     selectedVideo: null,
//   //   };

//   //   this.videoSearch('joe rogan');
//   // }



//   const videoSearch = (term) => {
//     YTSearch({ key: API_KEY, term: term }, () => {
//       setVideos({
//         videos: videos,
//         selectedVideo: videos[0],
//       });
//       // this.setState({
//       //   videos: videos,
//       //   selectedVideo: videos[0],
//       // }); //Same as this.setState({ videos : videos })
//     });
//   };

//   // render() {
//   // const NewSearch = () => {
//   //   videoSearch(term);
//   //   setVideos(videos);
//   // };

//   // NewSearch = _.debounce((term) => 300);

//   return (
//     // <div>
//     //   <h5>Youtube Search:</h5>
//     //   <SearchBar onSearchTermChange={NewSearch} />
//     //   <VideoDetail video={setVideos} />
//     //   <VideoList onVideoSelect={(setVideos) => setVideos} videos={setVideos} />
//     // </div>
//     <div>
//       <h5>Youtube Search:</h5>
//       <SearchBar onSearchTermChange={videoSearch} />
//       <VideoDetail video={setVideos} />
//       <VideoList onVideoSelect={setVideos} videos={setVideos} />
//     </div>
//   );

//   // }
// };

export default YoutubeSearch;
// // function newFunction(videoSearch, setTerms) {
// //   videoSearch = _.debounce((term) => {
// //     setTerms(term);
// //   }, 300);
// //   return videoSearch;
// // }


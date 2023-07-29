import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VideosContext } from "../../index";
import { videos } from "../../data/video";
import { Card } from "./Card";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faCompass,faList,faClock} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export function Explore() {
  const [allVideos, setAllVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    setAllVideos(videos);
    setFilteredVideos(videos); 
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = allVideos.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredVideos(filtered); 
  };

  return (
    <div className="explore">
     <ul className="sidebar">
			<li><Link style={{textDecoration:'none'}} to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></li>
				<li><Link to='/explore' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faCompass} />  Explore</Link></li>
				<li><Link to='/playlist' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faList} />  Playlist</Link></li>
				<li><Link  style={{textDecoration:'none'}}><FontAwesomeIcon icon={faClock} /> Watch Later</Link> </li>
			</ul>
      <div className="explore_videos">
      <header>Explore</header>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search video by title"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul className="videos">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((item) => {
            const { _id, title, views, chips, thumbnail, src, category, creator } = item;
            return <li key={_id}>
				<Card item={item}/>
			</li>;
          })
        ) : (
          <p>No videos found.</p>
        )}
      </ul>
      </div>

    </div>
  );
}

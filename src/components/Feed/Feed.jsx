import React from 'react';
import avatar from '../../assets/icons/avatar.png';
import video from '../../assets/dummyImages/Ep. 13_ Take Care of Your Body Habits To Win Here and Hereafter Dr. Tesneem Alkiek.mp4'
import './styles.css';

const Feed = () => {
  return ( 
  <div className="container">
      <div className="wrapper">
          <div className="post-user">
              <div className="icon">
                  <img className="avatar" src={avatar} alt="" />
              </div>
              <span>strongUser</span>
          </div>
          <div className="post-vid">
              <video  className="video"src={video} controls></video>
          </div>
          <div className="post-desc">
              <div className="desc">
                  <span>User </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores nisi, quas laudantium ea voluptatum dignissimos officiis cumque et eos incidunt eveniet commodi harum repellendus quod modi quasi vel quis?
              </div>
          </div>
      </div>
  </div>
  );
};

export default Feed;

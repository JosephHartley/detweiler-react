import React from 'react';
import { Helmet } from 'react-helmet-async';

const SubstackFeed = () => {
  window.SubstackFeedWidget = {
    substackUrl: "detweiler.substack.com",
    posts: 5,
    hidden: ["author"],
    colors: {
      primary: "#E5B446",
      secondary: "#A2C9D7",
      background: "#FFFFFF00",
    }
  };

  return (
    <>
      <div id="substack-feed-embed"></div>
      <Helmet>
        <script src="https://substackapi.com/embeds/feed.js" async></script>
      </Helmet>
    </>
  );
};

export default SubstackFeed;

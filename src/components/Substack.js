import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Substack = () => {
  window.SubstackFeedWidget = {
    substackUrl: "detweilertest.substack.com",
    posts: 5,
    hidden: ["author"],
    colors: {
      primary: "#E5B446",
      secondary: "#A2C9D7",
      background: "#FFFFFF00",
    }
  };

  window.CustomSubstackWidget = {
    substackUrl: "detweilertest.substack.com",
    placeholder: "example@gmail.com",
    buttonText: "Subscribe",
    theme: "custom",
    colors: {
      primary: "#E5B446",
      input: "#8D8CBD",
      email: "#E5B446",
      text: "#FFFFFF",
    },
  };

  return (
    <HelmetProvider>
      <div className="flex flex-col justify-start">
        <div id="substack-feed-embed"></div>
        <div className="mx-auto">
          <div id="custom-substack-embed"></div>
        </div>
        <Helmet>
          <script src="https://substackapi.com/embeds/feed.js" async></script>
          <script src="https://substackapi.com/widget.js" async></script>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Substack;

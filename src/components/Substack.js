import React from 'react';
import { Helmet } from 'react-helmet-async';

const Substack = () => {
  window.CustomSubstackWidget = {
    substackUrl: "detweiler.substack.com",
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
    <>
      <div id="custom-substack-embed"></div>
      <Helmet>
        <script src="https://substackapi.com/widget.js" async></script>
      </Helmet>
    </>
  );
};

export default Substack;

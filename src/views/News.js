import React from "react";
import Substack from "../components/Substack";

function News() {
  return (
    <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-center p-5">
        News
      </h1>
      <Substack />
    </section>
  );
}

export default News;

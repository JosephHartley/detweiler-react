import React from "react";
import Substack from "../components/Substack";
import { Seo } from "../components/Seo";

function News() {
  return (
    <>
      <Seo
        title="News | Detweiler"
        description="News from Detweiler HQ"
      />
      <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
        <h1 className="text-2xl font-bold text-center p-5">
          news
        </h1>
        <div className="p-5 border-8 border-payeRed rounded-xl">
          <Substack />
        </div>
      </section>
    </>
  );
}

export default News;

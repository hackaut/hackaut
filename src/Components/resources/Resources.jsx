import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

const markdown =
  "# Hi, *Pluto*! If you want to enable syntax highlighting for code blocks, make sure to use the rehype-highlight plugin, which has already been added in the component above. It will automatically highlight code blocks in your Markdown file. dddddddddddddddddddd";

function Resources() {
  return (
    <div className="flex flex-col items-center justify-center rounded-full bg-blue-50 ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto lg:max-w-xl sm:text-center">
          <p className="inline-block text-2xl px-3 py-px mb-2 font-extrabold tracking-wider text-black rounded-full uppercase border-black border-solid border ">
            ABOUT US
          </p>
        </div>
        <div className="my-4 mx-10 md:mx-40">
          <MarkdownRenderer filePath="/src/Components/resources/Resources.md" />
        </div>
      </div>
    </div>
  );
}

export default Resources;

<div className="my-4 mx-10 md:mx-40 text-justify">
  <MarkdownRenderer filePath="/src/Components/resources/Resources.md" />
</div>;

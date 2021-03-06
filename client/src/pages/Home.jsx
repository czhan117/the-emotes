import React, { useState } from "react";
import EntriesList from "../components/EntriesList";
import CreatePost from "../components/CreatePost";

function Home() {
  const [create, setCreate] = useState(false);
  const toggleCreate = () => {
    setCreate(!create);
  };

  return (
    <div className="my-40 flex flex-col items-center align-center">
      <div className="text-8xl font-semibold mb-4">emotes</div>

      <div className="w-1/2 border-t border-gray-300 my-10" />

      <p className="text-3xl mb-4">
        anonymous community-based journaling with mood analysis
      </p>

      <p className="text-xl w-1/2 mb-4 text-center">
        with a mission to promote self care through encouraging self expression
        in a forum. a personalized journaling space with machine learning
        algorithm generated feedback.
      </p>

      <p className="text-xl w-1/2 mb-4 text-center">
        enter the emotes world by{" "}
        <a
          href="#entries"
          className="cursor-pointer transition duration-500 hover:text-rose-400 underline decoration-dotted"
        >
          viewing others submissions below
        </a>{" "}
        and feel free to react with love! or just start expressing and releasing
        inner emotions, and
      </p>

      <button
        onClick={toggleCreate}
        className="text-xl py-2 mb-4 cursor-pointer transition duration-500 hover:text-rose-400 underline decoration-dotted "
      >
        create a post and tell the world how you feel
      </button>

      {create && (
        <div className="w-1/2 mb-4">
          <CreatePost />
        </div>
      )}

      <div className="w-3/4 my-4" id="entries">
        <EntriesList />
      </div>
    </div>
  );
}

export default Home;

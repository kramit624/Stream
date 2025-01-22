import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [links, setLinks] = useState("");
  const [videoLink, setVideoLink] = useState(""); // State to store the video link

  // Function to trim the URL and extract the required part
  function trimLink(url) {
    const trimmedText = url.split("/s/1")[1]; // This will get the part after "/s/1"
    return trimmedText; // Return the trimmed part
  }

  // Function to handle the button click and set the video link
  const data = () => {
    const result = trimLink(links); // Extract the part after "/s/1"
    const newVideoLink = `https://www.1024terabox.com/sharing/embed?autoplay=true&resolution=1080&mute=false&surl=${result}`;
    setVideoLink(newVideoLink); 
    setLinks("");
    // Update the state with the new video link
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="header w-full h-2/6 flex justify-center items-center sm:py-10 py-16">
          <h1 className="text-white md:text-4xl sm:text-3xl font-bold">
            Online Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center my-5 gap-3">
          <label className="text-white md:text-4xl sm:text-3xl font-bold">
            Paste Your Link
          </label>
          <input
            className="w-3/4 rounded-2xl h-9 px-4"
            placeholder="Paste Your Link"
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
          />
          <button
            onClick={data}
            className="bg-amber-600 py-2 px-4 text-white text-lg font-semibold rounded-3xl"
          >
            Search
          </button>
        </div>

        

        <div className="stream flex justify-center items-center w-full mb-4">
          {/* Only render iframe when videoLink is set */}
          {videoLink && (
            <iframe
              src={videoLink}
              frameBorder="0"
              className="w-auto sm:w-3/4"
              height="315"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { HiBeaker } from "react-icons/hi2";
import userImage from "./assets/User.jpg";
import googleVideo from "./assets/googleVideo.gif";
import { MdSearch } from "react-icons/md";
import googleLens from "./assets/googleLens.png";
import googleVoice from "./assets/googleVoice.png";

const App = () => {
  return (
    <div>
      <div className="text-sm flex m-5 mb-1 gap-5 justify-end  ">
        <div>Gmail</div>
        <div>Images</div>
        <div>
          <HiBeaker size={27} />
        </div>
        <div>
          <CgMenuGridO size={27} />
        </div>
        <div>
          <img
            src={userImage}
            alt="user image"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <img
          src={googleVideo}
          alt="just ossum video"
          height={200}
          width={380}
        />
      </div>
      <div className="border-[#d2d2d2] border px-4 w-[max-content] flex justify-center gap-4 items-center mx-auto rounded-full mt-6 ">
        <MdSearch size={24} />
        <input type="text" className="h-12 w-[430px] outline-none" />
        <img src={googleVoice} alt="google voice icon" className="w-7 h-7" />
        <img src={googleLens} alt="google lens icon" className="w-8 h-8" />
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button className="bg-[#f8f9fa] border border-transparent p-2 hover:border hover:border-[#c7c4c7] rounded-md text-base">
          Google Search
        </button>
        <button className="bg-[#f8f9fa] border border-transparent hover:border hover:border-[#c7c4c7] p-2 rounded-md text-base">
          I'm Feeling Lucky
        </button>
      </div>
      <p className="flex justify-center gap-2 mt-4 ">
        <span className="text-sm">Google Offered in: </span>
        <span className="text-[blue] hover:decoration-[blue] hover:underline cursor-pointer">
          اردو
        </span>
        <span className="text-[blue] hover:decoration-[blue] hover:underline cursor-pointer">
          پښتو
        </span>
        <span className="text-[blue] hover:decoration-[blue] hover:underline cursor-pointer">
          سنڌي
        </span>
      </p>
      <footer className="absolute w-full  bottom-0">
        <p className="bg-[#f2f2f2] text-base h-10 flex items-center p-4">
          Pakistan
        </p>
        <hr />
        <div>
          <div className="bg-[#f2f2f2] flex justify-between p-4">
            <ul className="flex gap-4 text-base">
              <li>About</li>
              <li>Advertising</li>
              <li>Business</li>
              <li>How Search works</li>
            </ul>
            <ul className="flex gap-4 text-base">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

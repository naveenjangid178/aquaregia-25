import React from 'react';

const Card = () => {
  return (
    <div className=" m-12 w-[230px] rounded-[20px] bg-transparent shadow-md p-1 overflow-hidden transition-transform duration-[0.5s] ease-[cubic-bezier(0.175,_0.885,_0.32,_1.275)] hover:scale-[1.05]">
      {/* Top Section */}
      <div className="h-[150px] rounded-[15px] flex flex-col bg-gradient-to-tr from-[#04ffbb] to-[#50f6ff] relative">
        <div className="border-b-[30px] w-[130px] absolute skew-x-[-40deg] shadow-[-10px_-10px_0_0_#1b233d]"></div>
        <div className="absolute top-[30px] left-0 w-[15px] h-[15px] bg-[rgba(255,_255,_255,_0)] rounded-tl-[15px] shadow-[-5px_-5px_0_2px_#1b233d]"></div>

        {/* Icons Section */}
        <div className="absolute top-0 w-full h-[30px] flex justify-between">
          <div className="h-full aspect-square p-[7px_0_7px_15px]"></div>
          <div className="h-full p-[8px_15px] flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="h-full fill-[#1b233d] hover:fill-white">
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 p-[10px_5px]">
        <span className="block text-[17px] font-bold text-white text-center tracking-[2px]">
          UNIVERSE OF UI
        </span>
        <div className="flex justify-between mt-5">
          <div className="flex-[30%] text-center p-2 text-[rgba(170,_222,_243,_0.721)]">
            <span className="block text-[12px]">2626</span>
            <span className="block text-[9px]">UI elements</span>
          </div>
          <div className="flex-[30%] text-center p-2 text-[rgba(170,_222,_243,_0.721)] border-x-[1px] border-[rgba(255,_255,_255,_0.126)]">
            <span className="block text-[12px]">100%</span>
            <span className="block text-[9px]">Free for use</span>
          </div>
          <div className="flex-[30%] text-center p-2 text-[rgba(170,_222,_243,_0.721)]">
            <span className="block text-[12px]">38,631</span>
            <span className="block text-[9px]">Contributers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

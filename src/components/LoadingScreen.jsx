import React, { useState, useEffect } from "react";

function LoadingScreen({onComplete}) {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(()=>{
          onComplete();

        },1000)
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-gray-100 bg-black">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;

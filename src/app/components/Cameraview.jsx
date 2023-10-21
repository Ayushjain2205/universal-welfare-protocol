import Webcam from "react-webcam";
import React from "react";

const Cameraview = () => {
  const webcamRef = React.useRef(null);

  // If you want to capture a screenshot, you can use this function
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div className="relative w-72 h-96 rounded-full overflow-hidden">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        height="100%"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default Cameraview;

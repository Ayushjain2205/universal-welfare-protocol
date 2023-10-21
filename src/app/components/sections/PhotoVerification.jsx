"use client";

const PhotoVerification = () => {
  console.log("PhotoVerification component function start");

  const camera = useRef(null);
  const errorMessages = {
    noCameraAccessible:
      "No camera device accessible. Please connect your camera or try a different browser.",
    permissionDenied:
      "Permission denied. Please refresh and give camera permission.",
    switchCamera:
      "It is not possible to switch camera to different one because there is only one video device accessible.",
    canvas: "Canvas is not supported.",
  };

  const videoConstraints = {
    facingMode: { exact: "user" },
  };

  useEffect(() => {
    console.log("Hello without camera access");
  }, []);

  useEffect(() => {
    console.log("Hello");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          console.log("Camera access granted");
          // Optionally, if you want to display the camera stream in a video tag:
          const videoElement = document.querySelector("#testVideo");
          if (videoElement) {
            videoElement.srcObject = stream;
          }
        })
        .catch(function (err) {
          console.error("Camera access error:", err);
        });
    } else {
      console.error("Browser does not support camera access");
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="top flex flex-row justify-end mb-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 18C3.75 17.8011 3.82902 17.6103 3.96967 17.4697C4.11032 17.329 4.30109 17.25 4.5 17.25H19.5C19.6989 17.25 19.8897 17.329 20.0303 17.4697C20.171 17.6103 20.25 17.8011 20.25 18C20.25 18.1989 20.171 18.3897 20.0303 18.5303C19.8897 18.671 19.6989 18.75 19.5 18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18ZM3.75 12C3.75 11.8011 3.82902 11.6103 3.96967 11.4697C4.11032 11.329 4.30109 11.25 4.5 11.25H19.5C19.6989 11.25 19.8897 11.329 20.0303 11.4697C20.171 11.6103 20.25 11.8011 20.25 12C20.25 12.1989 20.171 12.3897 20.0303 12.5303C19.8897 12.671 19.6989 12.75 19.5 12.75H4.5C4.30109 12.75 4.11032 12.671 3.96967 12.5303C3.82902 12.3897 3.75 12.1989 3.75 12ZM3.75 6C3.75 5.80109 3.82902 5.61032 3.96967 5.46967C4.11032 5.32902 4.30109 5.25 4.5 5.25H19.5C19.6989 5.25 19.8897 5.32902 20.0303 5.46967C20.171 5.61032 20.25 5.80109 20.25 6C20.25 6.19891 20.171 6.38968 20.0303 6.53033C19.8897 6.67098 19.6989 6.75 19.5 6.75H4.5C4.30109 6.75 4.11032 6.67098 3.96967 6.53033C3.82902 6.38968 3.75 6.19891 3.75 6Z"
            fill="black"
          />
        </svg>
      </div>
      <svg width="0" height="0" style={{ display: "none" }}>
        <defs>
          <clipPath id="clipShape">
            <path d="M212.5 128C212.5 198.506 164.96 255.5 106.5 255.5C48.04 255.5 0.5 198.506 0.5 128C0.5 57.4937 48.04 0.5 106.5 0.5C164.96 0.5 212.5 57.4937 212.5 128Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex flex-col gap-[28px]">
        <p className="text-[20px] font-medium">Photo verification</p>
        <div className="flex flex-col items-center">
          <div className="relative h-[286px] w-[213px] overflow-hidden">
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              playsInline
              style={{
                objectFit: "cover",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                clipPath: "ellipse(106.5px 143px at 50% 50%)", // Adjusted the values to achieve an egg shape
              }}
            >
              <source src="/videos/face.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <span className="mt-[26px]">
            Make sure your face fits in the circle{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-[60px] mb-[40px]">
        <button className="w-[213px] h-[48px] rounded-[8px] bg-[#1A2DD9] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PhotoVerification;

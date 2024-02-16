import { useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    return window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {isVisible && (
        <button className="btn btn-circle fixed right-6 bottom-6 lg:hidden bg-red-600 hover:bg-red-700 text-white" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bi bi-chevron-up"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;

/* eslint-disable react/prop-types */
import BooksImage from "../assets/books.jpg";
import Plausible from "plausible-tracker";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

export function VariationA({ userId, variation }) {
  const [count, setCount] = useState(0);
  const [pageView, setPageView] = useState(0);
  const { trackEvent } = Plausible({
    trackLocalhost: false,
  });
  const { trackPageview } = Plausible({
    trackLocalhost: false,
  });

  useEffect(() => {
    trackPageview(
      { trackLocalhost: true },
      { callback: () => console.log("Done!") }
    );
    const countPageView = () => {
      const storedPageViews = localStorage.getItem("pageViews");
      if (storedPageViews) {
        setPageView(parseInt(storedPageViews));
      }
      const handlePageLoad = () => {
        setPageView((prev) => {
          const updateCount = prev + 1;
          localStorage.setItem("pageViews", updateCount.toString());
          return updateCount;
        });
      };
      // const updatedPageViews = storedPageViews
      //   ? parseInt(storedPageViews) + 1
      //   : 1;
      window.addEventListener("load", handlePageLoad);
      return () => {
        window.removeEventListener("load", handlePageLoad);
      };
    };
    handleClick();
    countPageView();
  }, [pageView]);

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/variation", {
        userId,
        variation,
      });
      console.log(response.data, "RESPONSE DATA");
      trackEvent(
        "signup",
        {
          callback: () => console.log("done"),
        },
        { trackLocalhost: true }
      );
      let clickEvent = localStorage.getItem("count");
      if (!clickEvent) {
        clickEvent = 0;
        localStorage.setItem("count", clickEvent);
      }
      setCount((prev) => prev + 1);
      localStorage.setItem("count", count);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="variation-wrapper">
      <h1>Check out the Blinkist app</h1>
      <img src={BooksImage} alt="Variation A" className="books" />
      <p>Meet the app that revolutionized reading.</p>
      <p> Meet the app that has 18 million users.</p>
      <p>Thanks a lot for reading the article!</p>
      <button onClick={handleClick} className="variation-buttonA">
        Sign up
      </button>
      <h2>
        Count:{count} {pageView}
      </h2>
    </div>
  );
}

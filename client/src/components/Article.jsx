import { useState, useEffect } from "react";
import { getRandomVariation, generateUserId } from "../helpers/helper";
import "../App.css";
import { VariationA } from "./VariationA";
import { VariationB } from "./VariationB";

export function Article() {
  const [variation, setVariation] = useState("");
  const [userId, setUserId] = useState("");
  //const [count, setCount] = useState(0);
  //   const { trackEvent } = Plausible({
  //     trackLocalhost: false,
  //   });

  useEffect(() => {
    let assignedVariation = localStorage.getItem("variation");
    let storedUserId = localStorage.getItem("userId");
    if ((!assignedVariation && !storedUserId) || !storedUserId) {
      assignedVariation = getRandomVariation();
      storedUserId = generateUserId();
      localStorage.setItem("variation", assignedVariation);
      localStorage.setItem("userId", storedUserId);
    }
    setVariation(assignedVariation);
    setUserId(storedUserId);
  }, []);

  const renderContent = () => {
    if (variation === "A") {
      return <VariationA userId={userId} variation={variation} />;
    } else if (variation === "B") {
      return <VariationB userId={userId} variation={variation} />;
    }
    return null;
  };

  return <div>{renderContent()}</div>;
}

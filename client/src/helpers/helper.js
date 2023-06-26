import { v4 as uuid } from "uuid";
import Plausible from "plausible-tracker";

export const variations = ["A", "B"]; // Array of available variations

export const getRandomVariation = () => {
  const randomIndex = Math.floor(Math.random() * variations.length);
  return variations[randomIndex];
};

export const generateUserId = () => {
  return uuid(); // Generate a UUID using the uuid library
};

export const plausible = Plausible({
  domain: "http://127.0.0.1:5173/",
});

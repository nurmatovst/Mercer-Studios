import { useLocation } from "react-router-dom";

const VALID_LANGS = ["en", "uz", "ru"];

export const useLng = (): string => {
  const location = useLocation();
  const first = location.pathname.split("/").filter(Boolean)[0];
  return VALID_LANGS.includes(first) ? first : "en";
};
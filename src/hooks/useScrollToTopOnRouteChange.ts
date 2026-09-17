import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTopOnRouteChange = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let anchors work
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
};

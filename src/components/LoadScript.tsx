"use client";

import { useEffect } from "react";

const LoadScript: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "./node_modules/preline/dist/preline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default LoadScript;
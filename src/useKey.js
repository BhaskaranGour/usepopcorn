import { useEffect } from "react";

export function useKey(key, inputFunc) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          inputFunc();
        }
      }
      document.addEventListener("keydown", callback);
      return () => {
        document.removeEventListener("keydown", callback);
      };
    },
    [inputFunc, key]
  );
}


import React, { useEffect, useRef } from "react";

function useOutsideAlerter(ref: any, handleOutside: () => void) {
  useEffect(() => {

    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutside()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props: any) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handleOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;

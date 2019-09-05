import React, { useState } from "react";
import FaviconPresenter from "./FaviconPresenter";

const useFavicon = initValue => {
  const [value, setValue] = useState(initValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

const FaviconContainer = () => {
  const { value, onChange } = useFavicon(
    "https://avatars2.githubusercontent.com/u/28755673?s=460&v=4"
  );

  console.log(value);
  return <FaviconPresenter value={value} onChange={onChange} />;
};

export default FaviconContainer;

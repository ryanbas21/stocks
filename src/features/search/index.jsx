import React from "react";
import { TextInput, Button } from "grommet";
import "./search.css";

export default props => (
  <div className="search-container">
    <div className="inline-search">
      <TextInput
        value={props.value}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
      <Button fill={false} onClick={props.onClick} label={"Add To Portfolio"} />
    </div>
  </div>
);

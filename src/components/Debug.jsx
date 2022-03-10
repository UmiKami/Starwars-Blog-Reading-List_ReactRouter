import React from "react";
import { prettyPrintJson } from "pretty-print-json";
import { Fragment } from "react/cjs/react.production.min";

const Debug = (props) => {
  let params = new URLSearchParams(window.location.search);
  if (true || params.has("debug")) {
    return (
      <div className="debug">
        <p>{props.message}</p>
        <pre
          className="json-container"
          dangerouslySetInnerHTML={{
            __html: prettyPrintJson.toHtml(props.object, {
              indent: 2,
              lineNumbers: true,
            }),
          }}
        ></pre>
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Debug;

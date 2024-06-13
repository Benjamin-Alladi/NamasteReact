import React from "react";
import ReactDOM from "react-dom/client";

let ele= React.createElement("div",
    {id:"child", style:{color:"red", fontWeight:"600"}},
    ["This is div",
     React.createElement("h2", {style:{color:"green"}}, "First Heading"),
     React.createElement("h2", {style:{color:"blue"}}, ["Second Heading"])
    ]
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
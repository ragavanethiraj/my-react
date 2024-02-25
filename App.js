import React from "react";
import  ReactDOM  from "react-dom/client";
const heading=React.createElement("div",
{id:"parent"},
[
    React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{id:"heading"},"Hi from parcel"),
        React.createElement("h2",{id:"heading2"},"Hi from second")
    ]
    ),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{id:"heading"},"Hi from first"),
        React.createElement("h2",{id:"heading2"},"Hi from second")
    ]
    )
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
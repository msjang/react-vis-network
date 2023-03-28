import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { display, nodes } from "./data";

export function nodeTitleElement(node) {
  const container = document.createElement("div");
  const root = createRoot(container);
  //container.id = `${data}`;
  //container.style.backgroundColor = "white";
  container.style.minWidth = "10rem";
  container.style.minHeight = "5rem";
  container.style.display = "flex";
  //container.style.justifyContent = "flex-start";
  container.style.margin = "-5px";
  container.style.borderRadius = "2%";
  root.render(
    <StrictMode>
      <div style={{ paddingRight: "50px" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%"
          }}
        >
          <li>Name : {node.name}</li>
          <li>IP: {node.ip}</li>
          <li>CPU: {node.cpu_rate}</li>
        </ul>
      </div>
    </StrictMode>
  );
  return container;
}

export function edgeTitleElement(fromNode, toNode, port1, port2, datainfo) {
  const container = document.createElement("div");
  const root = createRoot(container);
  //container.id = `${data}`;
  //container.style.backgroundColor = "white";
  container.style.minWidth = "10rem";
  container.style.minHeight = "5rem";
  container.style.display = "flex";
  //container.style.justifyContent = "flex-start";
  container.style.margin = "-5px";
  container.style.borderRadius = "2%";
  root.render(
    <StrictMode>
      <div style={{ paddingRight: "50px" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%"
          }}
        >
          <li>{`${fromNode[display]}(${port1}) → ${toNode[display]}(${port2})`}</li>
          <li>Traffic rate: {datainfo.traffic_rate}</li>
          <li>
            {"Status: "}
            <span
              style={{
                color:
                  datainfo.linkstatus.toLowerCase() === "link up"
                    ? "green"
                    : "red"
              }}
            >
              {datainfo.linkstatus}
            </span>
          </li>
        </ul>
      </div>
    </StrictMode>
  );
  return container;
}

export function edgeTitleElement1(link) {
  const container = document.createElement("div");
  const root = createRoot(container);
  //container.id = `${data}`;
  //container.style.backgroundColor = "white";
  container.style.minWidth = "10rem";
  container.style.minHeight = "5rem";
  container.style.display = "flex";
  //container.style.justifyContent = "flex-start";
  container.style.margin = "-5px";
  container.style.borderRadius = "2%";

  const fromNode = nodes.filter((d) => d.id === link.node1)[0];
  const toNode = nodes.filter((d) => d.id === link.node2)[0];

  root.render(
    <StrictMode>
      <div style={{ paddingRight: "50px" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%"
          }}
        >
          <li>{`${fromNode[display]}(${link.port1}) → ${toNode[display]}(${link.port2})`}</li>
          <li>
            {"Traffic rate: "}
            <span
              style={{
                color:
                  Number(link.traffic.value1.split("mbps")[0]) < 500
                    ? "#000"
                    : "red"
              }}
            >
              {link.traffic.value1}
            </span>
          </li>
          <li>
            {"Status: "}
            <span
              style={{
                color: link.status.toLowerCase() === "link up" ? "green" : "red"
              }}
            >
              {link.status}
            </span>
          </li>
        </ul>
      </div>
    </StrictMode>
  );
  return container;
}

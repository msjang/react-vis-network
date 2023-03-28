import React from "react";
import VisNetworkReactComponent from "vis-network-react";
import { nodes, links, display } from "./data";
import { edgeTitleElement1, nodeTitleElement } from "./titleElement";

const options = {
  nodes: {
    shape: "box",
    //shapeProperties: { borderRadius: 8 },
    widthConstraint: { minimum: 100 },
    heightConstraint: { minimum: 30 },
    borderWidth: 1,
    //borderWidthSelected: 3
    scaling: {
      min: 16,
      max: 32
    }
  },
  edges: {
    length: 220,
    smooth: false,
    width: 2
    // smooth: {
    //   type: "straightCross",
    //   forceDirection: "none"
    //   //roundness: 0.3
    // },
    //arrows: { to: true },
    //label: "hello",
    //chosen: { label: false, edge: changeChosenEdgeToArrowScale }
    //chosen: { label: false, edge: true }
  },
  height: "700",
  physics: {
    enabled: true,
    //stabilization: false
    barnesHut: { gravitationalConstant: -30000 },
    stabilization: { iterations: 2500 }
  },
  interaction: {
    hover: true
  },
  groups: {
    esw: {
      //shape: "dot",
      color: "#FF7F50"
    },
    csw: {
      color: "#40E0D0"
    }
  }
};

var nodesData = [];
var edgesData = [];

function addNode(node) {
  nodesData.push({
    id: node.id,
    label: node[display],
    title: nodeTitleElement(node),
    group: node.group
  });
}

function addEdge(link) {
  edgesData.push({
    id: `${link.node1}-${link.port1} → ${link.node2}-${link.port2}`,
    from: link.node1,
    to: link.node2,
    label: link.traffic.value1,
    // font: {
    //   background: "white",
    //   size: "8",
    //   align: "horizontal",
    //   vadjust: 1
    // },

    //length: 170,
    //chosen: { label: false, edge: true },
    color: {
      color: link.status.toLowerCase() === "link up" ? "green" : "red",
      hover: link.status.toLowerCase() === "link up" ? "green" : "red"
    },
    title: edgeTitleElement1(link)
    // arrows: {
    //   to: {
    //     enabled: true,
    //     type: "image",
    //     src: ""
    //   }
    // }
  });
}

function addSwitchData() {
  nodes.forEach((n) => {
    addNode(n);
  });
  links.forEach((l) => {
    addEdge(l);
  });
}

addSwitchData();

function Topology() {
  const [data, setData] = React.useState({
    nodes: nodesData,
    edges: edgesData
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <VisNetworkReactComponent data={data} options={options} />
    </div>
  );
}

export default Topology;

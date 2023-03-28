import React from "react";
import VisNetworkReactComponent from "vis-network-react";
import { display, switchData } from "./data";
import { edgeTitleElement, nodeTitleElement } from "./titleElement";

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
    length: 200,
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

var nodes = [];
var edges = [];

var changeChosenEdgeSelected = function (values, id, selected, hovering) {
  if (selected) {
    values.color = "blue";
    window.location.href = "https://www.google.com";
  }
};

function addSwitchData(switchData) {
  switchData.map((data) => {
    addNode(data.node1, data.data);
    addNode(data.node2, data.data);
    addEdge(data.node1, data.node2, data.port1, data.port2, data.data);
  });
}

function addNode(node, datainfo) {
  var alreadyData = false;
  if (nodes.length > 0) {
    alreadyData = nodes.filter((data) => {
      console.log(node);
      console.log(data.id);
      if (node.name.toLowerCase() === data.id.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
  }
  console.log(alreadyData);
  if (!alreadyData.length > 0) {
    nodes.push({
      id: node.name,
      label: node[display],
      title: nodeTitleElement(node, datainfo),
      group: node.group
    });
  }
  console.log(nodes);
}

function addEdge(fromNode, toNode, port1, port2, datainfo) {
  edges.push({
    id: `${fromNode.name}-${port1} → ${toNode.name}-${port2}`,
    from: fromNode.name,
    to: toNode.name,
    label: datainfo.traffic_rate,
    // font: {
    //   background: "white",
    //   size: "8",
    //   align: "horizontal",
    //   vadjust: 1
    // },

    //length: 170,
    chosen: { label: changeChosenEdgeSelected, edge: true },

    // chosen : {function(values, id, selected, hovering) {
    //   values.property = chosenValue;
    // } },

    color: {
      color: datainfo.linkstatus.toLowerCase() === "link up" ? "green" : "red",
      hover: datainfo.linkstatus.toLowerCase() === "link up" ? "green" : "red"
    },
    title: edgeTitleElement(fromNode, toNode, port1, port2, datainfo)
    // arrows: {
    //   to: {
    //     enabled: true,
    //     type: "image",
    //     src: ""
    //   }
    // }
  });
  console.log(edges);
}

addSwitchData(switchData);

function Visualize() {
  const [data, setData] = React.useState({
    nodes: nodes,
    edges: edges
  });

  // React.useEffect(() => {
  //   setData({
  //     nodes: nodes,
  //     edges: edges
  //   });
  // }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <VisNetworkReactComponent data={data} options={options} />
    </div>
  );
}

export default Visualize;

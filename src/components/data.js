export const nodes = [
  { id: 1, name: "CSW01", ip: "192.168.1.101", cpu_rate: "40%", group: "csw" },
  { id: 2, name: "CSW02", ip: "192.168.1.102", cpu_rate: "20%", group: "csw" },
  { id: 3, name: "CSW03", ip: "192.168.1.103", cpu_rate: "30%", group: "csw" },
  { id: 4, name: "ESW01", ip: "192.168.1.104", cpu_rate: "25%", group: "esw" },
  { id: 5, name: "ESW02", ip: "192.168.1.105", cpu_rate: "35%", group: "esw" }
];

export const links = [
  {
    node1: 1, // node id
    port1: "xe1",
    node2: 2, // node id
    port2: "xe1",
    traffic: { value1: "100mbps", value2: "50mbps" },
    status: "Link Up"
  },
  {
    node1: 1, // node id
    port1: "xe2",
    node2: 3, // node id
    port2: "xe1",
    traffic: { value1: "200mbps", value2: "50mbps" },
    status: "Link Up"
  },
  {
    node1: 1, // node id
    port1: "xe3",
    node2: 4, // node id
    port2: "xe1",
    traffic: { value1: "500mbps", value2: "50mbps" },
    status: "Link Down"
  },
  {
    node1: 4, // node id
    port1: "xe1",
    node2: 5, // node id
    port2: "xe1",
    traffic: { value1: "300mbps", value2: "50mbps" },
    status: "Link Up"
  }
];

export const display = "name";
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

export const switchData = [
  //star
  {
    node1: {
      name: "CSW01",
      ip: "192.168.1.100",
      cpu_rate: "20%",
      group: "csw"
    },
    port1: "xe1",
    node2: {
      name: "CSW02",
      ip: "192.168.1.102",
      cpu_rate: "30%",
      group: "csw"
    },
    port2: "xe1",
    data: { traffic_rate: "0.30mbps", linkstatus: "Link Up" }
  },
  {
    node1: {
      name: "CSW01",
      ip: "192.168.1.100",
      cpu_rate: "20%",
      group: "csw"
    },
    port1: "xe2",
    node2: {
      name: "ESW01",
      ip: "192.168.1.103",
      cpu_rate: "30%",
      group: "esw"
    },
    port2: "xe1",
    data: { traffic_rate: "0.70mbps", linkstatus: "Link Down" }
  },
  {
    node1: {
      name: "CSW01",
      ip: "192.168.1.100",
      cpu_rate: "20%",
      group: "csw"
    },
    port1: "xe3",
    node2: {
      name: "CSW04",
      ip: "192.168.1.104",
      cpu_rate: "30%",
      group: "csw"
    },
    port2: "xe1",
    data: { traffic_rate: "0.51mbps", linkstatus: "Link Up" }
  },
  {
    node1: {
      name: "ESW01",
      ip: "192.168.1.103",
      cpu_rate: "30%",
      group: "esw"
    },
    port1: "xe2",
    node2: {
      name: "ESW02",
      ip: "192.168.1.104",
      cpu_rate: "10%",
      group: "esw"
    },
    port2: "xe1",
    data: { traffic_rate: "0.70mbps", linkstatus: "Link Up" }
  }
  // {
  //   node1: { name: "CSW03", ip: "192.168.1.103", cpu_rate: "30%", group: "csw" },
  //   port1: "0/3",
  //   node2: { name: "Switch06", ip: "192.168.1.106", cpu_rate: "10%" },
  //   port2: "0/1",
  //   data: { traffic_rate: "0.70mbps", linkstatus: "Link Up" }
  // }
  // {
  //   node1: { name: "Switch02", ip: "192.168.1.102", cpu_rate: "30%" },
  //   port1: "0/2",
  //   node2: { name: "CSW01", ip: "192.168.1.100", cpu_rate: "20%", group: "csw" },
  //   port2: "0/2",
  //   data: { traffic_rate: "0.30mbps" }
  // }
  // {
  //   node1: { name: "SW02", ip: "192.168.1.102", cpu_rate: "30%" },
  //   port1: "0/2",
  //   node2: { name: "SW03", ip: "192.168.1.103", cpu_rate: "30%" },
  //   port2: "0/2",
  //   data: { traffic_rate: "40mbs" }
  // }

  // { node1: "SW01", port1: "0/2", node2: "SW03", port2: "0/1" },
  // { node1: "SW01", port1: "0/3", node2: "SW04", port2: "0/1" },
  // { node1: "SW01", port1: "0/4", node2: "SW05", port2: "0/1" }
  //Ring
  // { node1: "SW01", port1: "0/1", node2: "SW02", port2: "0/1" },
  // { node1: "SW02", port1: "0/2", node2: "SW03", port2: "0/1" },
  // { node1: "SW03", port1: "0/2", node2: "SW04", port2: "0/1" },
  // { node1: "SW04", port1: "0/2", node2: "SW01", port2: "0/2" }
  //line
  // { node1: "SW01", port1: "0/1", node2: "SW02", port2: "0/1" },
  // { node1: "SW02", port1: "0/2", node2: "SW03", port2: "0/1" },
  // { node1: "SW03", port1: "0/2", node2: "SW04", port2: "0/1" }
  //tree
  // { node1: "SW01", port1: "0/1", node2: "SW02", port2: "0/1" },
  // { node1: "SW01", port1: "0/2", node2: "SW03", port2: "0/1" },
  // { node1: "SW02", port1: "0/2", node2: "SW04", port2: "0/1" },
  // { node1: "SW02", port1: "0/3", node2: "SW05", port2: "0/1" },
  // { node1: "SW03", port1: "0/2", node2: "SW06", port2: "0/1" },
  // { node1: "SW03", port1: "0/3", node2: "SW07", port2: "0/1" }
  // //Fully connected
  //1
  // { node1: "SW01", port1: "0/1", node2: "SW02", port2: "0/1" },
  // { node1: "SW01", port1: "0/2", node2: "SW03", port2: "0/1" },
  // { node1: "SW01", port1: "0/3", node2: "SW04", port2: "0/1" },
  // //2
  // //{ node1: "SW02", port1: "0/2", node2: "SW01", port2: "0/2" },
  // { node1: "SW02", port1: "0/2", node2: "SW03", port2: "0/2" },
  // { node1: "SW02", port1: "0/3", node2: "SW04", port2: "0/2" },
  // //3
  // // { node1: "SW03", port1: "0/3", node2: "SW01", port2: "0/1" },
  // // { node1: "SW03", port1: "0/4", node2: "SW02", port2: "0/1" },
  // { node1: "SW03", port1: "0/3", node2: "SW04", port2: "0/3" }
  // //4
  // // { node1: "SW04", port1: "0/3", node2: "SW01", port2: "0/1" },
  // // { node1: "SW04", port1: "0/2", node2: "SW02", port2: "0/1" },
  // // { node1: "SW04", port1: "0/2", node2: "SW03", port2: "0/1" }
];

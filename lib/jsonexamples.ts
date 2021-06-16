let dataExample = `[
  {
    "type": "Motherboard",
    "name": "MSI Z390-A PRO (MS-7B98)",
    "sensors": []
  },
  {
    "type": "Cpu",
    "name": "Intel Core i7-9700KF",
    "sensors": [
      {
        "type": "Load",
        "name": "CPU Core #1",
        "value": 19.0476189
      },
      {
        "type": "Load",
        "name": "CPU Core #2",
        "value": 23.8095226
      },
      {
        "type": "Load",
        "name": "CPU Core #3",
        "value": 19.0476189
      },
      {
        "type": "Load",
        "name": "CPU Core #4",
        "value": 15.8730145
      },
      {
        "type": "Load",
        "name": "CPU Core #5",
        "value": 6.349206
      },
      {
        "type": "Load",
        "name": "CPU Core #6",
        "value": 11.1111107
      },
      {
        "type": "Load",
        "name": "CPU Core #7",
        "value": 9.523809
      },
      {
        "type": "Load",
        "name": "CPU Core #8",
        "value": 28.5714264
      },
      {
        "type": "Load",
        "name": "CPU Total",
        "value": 16.6666622
      },
      {
        "type": "Temperature",
        "name": "CPU Core #1",
        "value": 47
      },
      {
        "type": "Temperature",
        "name": "CPU Core #2",
        "value": 46
      },
      {
        "type": "Temperature",
        "name": "CPU Core #3",
        "value": 44
      },
      {
        "type": "Temperature",
        "name": "CPU Core #4",
        "value": 51
      },
      {
        "type": "Temperature",
        "name": "CPU Core #5",
        "value": 45
      },
      {
        "type": "Temperature",
        "name": "CPU Core #6",
        "value": 44
      },
      {
        "type": "Temperature",
        "name": "CPU Core #7",
        "value": 44
      },
      {
        "type": "Temperature",
        "name": "CPU Core #8",
        "value": 47
      },
      {
        "type": "Temperature",
        "name": "CPU Package",
        "value": 51
      },
      {
        "type": "Temperature",
        "name": "CPU Core #1 Distance to TjMax",
        "value": 53
      },
      {
        "type": "Temperature",
        "name": "CPU Core #2 Distance to TjMax",
        "value": 54
      },
      {
        "type": "Temperature",
        "name": "CPU Core #3 Distance to TjMax",
        "value": 56
      },
      {
        "type": "Temperature",
        "name": "CPU Core #4 Distance to TjMax",
        "value": 49
      },
      {
        "type": "Temperature",
        "name": "CPU Core #5 Distance to TjMax",
        "value": 55
      },
      {
        "type": "Temperature",
        "name": "CPU Core #6 Distance to TjMax",
        "value": 56
      },
      {
        "type": "Temperature",
        "name": "CPU Core #7 Distance to TjMax",
        "value": 56
      },
      {
        "type": "Temperature",
        "name": "CPU Core #8 Distance to TjMax",
        "value": 53
      },
      {
        "type": "Temperature",
        "name": "Core Max",
        "value": 51
      },
      {
        "type": "Temperature",
        "name": "Core Average",
        "value": 46
      },
      {
        "type": "Clock",
        "name": "CPU Core #1",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #2",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #3",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #4",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #5",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #6",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #7",
        "value": 4600.00342
      },
      {
        "type": "Clock",
        "name": "CPU Core #8",
        "value": 4600.00342
      },
      {
        "type": "Power",
        "name": "CPU Package",
        "value": 44.0316925
      },
      {
        "type": "Power",
        "name": "CPU Cores",
        "value": 41.5659828
      },
      {
        "type": "Power",
        "name": "CPU Graphics",
        "value": 0
      },
      {
        "type": "Power",
        "name": "CPU Memory",
        "value": 2.279934
      },
      {
        "type": "Clock",
        "name": "Bus Speed",
        "value": 100.000076
      }
    ]
  },
  {
    "type": "Memory",
    "name": "Generic Memory",
    "sensors": [
      {
        "type": "Data",
        "name": "Memory Used",
        "value": 12.4106216
      },
      {
        "type": "Data",
        "name": "Memory Available",
        "value": 19.5253868
      },
      {
        "type": "Load",
        "name": "Memory",
        "value": 38.8609047
      },
      {
        "type": "Data",
        "name": "Virtual Memory Used",
        "value": 16.7080421
      },
      {
        "type": "Data",
        "name": "Virtual Memory Available",
        "value": 20.4779663
      },
      {
        "type": "Load",
        "name": "Virtual Memory",
        "value": 44.9309921
      }
    ]
  },
  {
    "type": "GpuNvidia",
    "name": "NVIDIA NVIDIA GeForce RTX 2070 SUPER",
    "sensors": [
      {
        "type": "Temperature",
        "name": "GPU Core",
        "value": 44
      },
      {
        "type": "Clock",
        "name": "GPU Core",
        "value": 645.000061
      },
      {
        "type": "Clock",
        "name": "GPU Memory",
        "value": 5000.98047
      },
      {
        "type": "Clock",
        "name": "GPU Shader",
        "value": 0
      },
      {
        "type": "Load",
        "name": "GPU Core",
        "value": 36
      },
      {
        "type": "Load",
        "name": "GPU Memory Controller",
        "value": 13
      },
      {
        "type": "Load",
        "name": "GPU Video Engine",
        "value": 0
      },
      {
        "type": "Load",
        "name": "GPU Bus",
        "value": 0
      },
      {
        "type": "Control",
        "name": "GPU Fan",
        "value": 23
      },
      {
        "type": "SmallData",
        "name": "GPU Memory Total",
        "value": 8192
      },
      {
        "type": "SmallData",
        "name": "GPU Memory Used",
        "value": 1784.48438
      },
      {
        "type": "SmallData",
        "name": "GPU Memory Free",
        "value": 6407.51563
      },
      {
        "type": "Load",
        "name": "GPU Memory",
        "value": 21.7832565
      },
      {
        "type": "Throughput",
        "name": "GPU PCIe Rx",
        "value": 39936000
      },
      {
        "type": "Throughput",
        "name": "GPU PCIe Tx",
        "value": 5120000
      }
    ]
  },
  {
    "type": "Storage",
    "name": "WDC  WDS100T2B0A-00SM50",
    "sensors": [
      {
        "type": "Temperature",
        "name": "Temperature",
        "value": 30
      },
      {
        "type": "Load",
        "name": "Used Space",
        "value": 60.9838028
      }
    ]
  },
  {
    "type": "Storage",
    "name": "ST1000DM010-2EP102",
    "sensors": [
      {
        "type": "Temperature",
        "name": "Temperature",
        "value": 32
      },
      {
        "type": "Load",
        "name": "Used Space",
        "value": 16.2462845
      }
    ]
  },
  {
    "type": "Network",
    "name": "Ethernet",
    "sensors": [
      {
        "type": "Data",
        "name": "Data Uploaded",
        "value": 0.331957221
      },
      {
        "type": "Data",
        "name": "Data Downloaded",
        "value": 11.8002234
      },
      {
        "type": "Throughput",
        "name": "Upload Speed",
        "value": 1409.54163
      },
      {
        "type": "Throughput",
        "name": "Download Speed",
        "value": 112540.883
      },
      {
        "type": "Load",
        "name": "Network Utilization",
        "value": 0.0911603346
      }
    ]
  }
]`;
let configExample = `{
  "ip": "192.168.0.5",
  "interval": 1,
  "transport": {
    "ws": {
      "port": 8546,
      "enabled": true
    },
    "udp": {
      "port": 8545,
      "enabled": false
    }
  },
  "hardware": {
    "cpu": true,
    "gpu": true,
    "ram": true,
    "motherboard": false,
    "fans": false,
    "network": false,
    "storage": false
  }
}`;
export { dataExample, configExample };

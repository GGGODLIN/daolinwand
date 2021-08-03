export const goldenSample = {
    "rt": [
        "bh.r.zoneExchange"
    ],
    "project": "GOLD",
    "spaces": [
        {
            "id": "483afcd5-d3e3-4ef2-92d9-18461abaca05",
            "name": "2楼",
            "iconId": "2382f9b0-68d4-4d86-9bcb-eba70ae105ef",
            "parentId": "cb91810e-1b10-4758-a909-0ad736b6451d"
        },
        {
            "id": "afab3b78-5641-485b-82d3-e6255b86bb28",
            "name": "3户",
            "iconId": "982c6782-1255-4835-ad68-f1ba80f7ab3f",
            "parentId": "483afcd5-d3e3-4ef2-92d9-18461abaca05"
        },
        {
            "id": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "name": "卧室",
            "iconId": "4d4efe20-a789-4e08-ad5a-555fa3ddb747",
            "parentId": "afab3b78-5641-485b-82d3-e6255b86bb28"
        },
        {
            "id": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "name": "餐厅",
            "iconId": "943c87d6-fb0a-407c-bb47-306a75743bf5",
            "parentId": "afab3b78-5641-485b-82d3-e6255b86bb28"
        },
        {
            "id": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "name": "客厅",
            "iconId": "89b8fb8e-019b-422d-b051-27197d731c15",
            "parentId": "afab3b78-5641-485b-82d3-e6255b86bb28"
        },
        {
            "id": "75473952-8ebe-4bea-aeb2-71ea7fde4e17",
            "name": "厨房",
            "iconId": "07dd26ee-4b07-42c2-b722-2d9fd6cac221",
            "parentId": "afab3b78-5641-485b-82d3-e6255b86bb28"
        }
    ],
    "gw": {
        "name": "AltairIoT网关",
        "dvId": "GOLD-WuFLXpRyItnE",
        "spaceId": "afab3b78-5641-485b-82d3-e6255b86bb28",
        "iconId": "5aebc715-f931-4e8b-bed1-ec5bae26b975",
        "deviceType": 61184,
        "commInfo": {
            "KNX": {
                "pAddr": "1/1/1",
                "UDPs": [
                    {
                        "enableIpTunneling": true,
                        "ip": "224.0.23.12",
                        "name": "eth0",
                        "obtainIpType": 12,
                        "port": 3671,
                        "type": "mulitple"
                    }
                ],
                "filters": [
                    {
                        "in": "",
                        "networkName": "TP",
                        "out": ""
                    },
                    {
                        "in": "",
                        "networkName": "eth0",
                        "out": ""
                    },
                    {
                        "in": "",
                        "networkName": "eth1",
                        "out": ""
                    }
                ]
            },
            "protocol4GW": "EtN"
        },
        "hwInfo": {
            "brand": "AdvancedDevices",
            "model": "ADM-S2-K1M4"
        },
        "spec": {
            "comPortCnt": 4
        },
        "status": 0,
        "networkCards": [
            {
                "enable": true,
                "ip": "192.168.0.101",
                "mac": "00:00:21:33:66:88",
                "name": "eth0",
                "network": "internet"
            },
            {
                "enable": true,
                "ip": "192.168.31.177",
                "mac": "00:00:21:33:66:99",
                "name": "eth1",
                "network": "intranet"
            }
        ],
        "isBindedWithUser": false,
        "isBindedWithIoTCloud": true
    },
    "hubs": [
        {
            "name": "继电器4路10A",
            "dvId": "GOLD-LzwmWVuOcaJL",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "4d85ce6a-a102-4ecb-bb95-2b7a53d53421",
            "deviceType": 60930,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 3,
                    "ackSet": true
                },
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 5,
                    "ackSet": true
                },
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 7,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 8,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 7,
                    "ackSet": true
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 9,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.11",
                    "objs": [
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/1"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/5"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/2"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/6"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/3"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/7"
                            ],
                            "objId": 6
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/4"
                            ],
                            "objId": 7
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/8"
                            ],
                            "objId": 8
                        },
                        {
                            "gAddrs": [
                                "0/0/100"
                            ],
                            "objId": 9
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/R4.10.1"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6,
                8,
                9
            ],
            "heartbeat": 60,
            "status": 0,
            "chInfo": [
                {
                    "ch": 1,
                    "conDev": "GOLD-4WJPARFiL6fB"
                },
                {
                    "ch": 2,
                    "conDev": "GOLD-BqqNkb2WH1pL"
                },
                {
                    "ch": 3,
                    "conDev": "GOLD-YE7Ko36hXutX"
                },
                {
                    "ch": 4,
                    "conDev": "GOLD-ftyD0eilnq25"
                }
            ]
        },
        {
            "name": "调光器2路3A",
            "dvId": "GOLD-IneJTZG2Tho0",
            "spaceId": "75473952-8ebe-4bea-aeb2-71ea7fde4e17",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "4d85ce6a-a102-4ecb-bb95-2b7a53d53421",
            "deviceType": 60930,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开/关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开/关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.dimming",
                    "dpt": "3.007",
                    "flags": 148,
                    "funId": "Dimming",
                    "name": "调光",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Dimming",
                    "name": "亮度设定",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Dimming",
                    "name": "亮度状态",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 4,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开/关",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开/关 状态",
                    "objId": 7,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 6,
                    "ackSet": true
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.dimming",
                    "dpt": "3.007",
                    "flags": 148,
                    "funId": "Dimming",
                    "name": "调光",
                    "objId": 8,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Dimming",
                    "name": "亮度设定",
                    "objId": 9,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Dimming",
                    "name": "亮度状态",
                    "objId": 10,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 9,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 11,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.16",
                    "objs": [
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/21"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/29"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/22"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/23"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/24"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/25"
                            ],
                            "objId": 6
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/30"
                            ],
                            "objId": 7
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/26"
                            ],
                            "objId": 8
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/27"
                            ],
                            "objId": 9
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/28"
                            ],
                            "objId": 10
                        },
                        {
                            "gAddrs": [
                                "0/0/104"
                            ],
                            "objId": 11
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/D02.1"
            },
            "spec": {},
            "sendTelRules": [
                2,
                5,
                7,
                10,
                11
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "RS485回路控制器",
            "dvId": "GOLD-2Tc0892V5NtD",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "4d85ce6a-a102-4ecb-bb95-2b7a53d53421",
            "deviceType": 60930,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 1,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 2,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 3,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 4,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 3,
                    "com": 2
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "AdvancedDevices",
                "model": "ADH-L4-C"
            },
            "spec": {
                "comPortCnt": 2
            },
            "sendTelRules": [
                1,
                2,
                3,
                4
            ],
            "status": 0,
            "chInfo": [
                {
                    "ch": 1,
                    "conDev": "GOLD-WI8ENdLoidVZ"
                },
                {
                    "ch": 2,
                    "conDev": "GOLD-lzFepqYJcXEu"
                },
                {
                    "ch": 3,
                    "conDev": "GOLD-KNJul33ZdoNi"
                },
                {
                    "ch": 4,
                    "conDev": "GOLD-TgVHClbLJ5sA"
                }
            ]
        },
        {
            "name": "露点温控器（三合一）",
            "dvId": "GOLD-LL40rT9TnmF5",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "446d1ea5-2a9f-4d5f-94e1-3952d5103fa6",
            "deviceType": 60929,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UShort:1",
                    "dpt": "1.001",
                    "flags": 8,
                    "fp": 1,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "版本号",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:1",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 2,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "上电恢复",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:2",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 3,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "地址远程锁定",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:1",
                    "dpt": "1.002",
                    "flags": 12,
                    "fp": 4,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "地址设定",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:3",
                    "dpt": "1.002",
                    "flags": 12,
                    "fp": 5,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "面板波特率设置锁定",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 6,
                    "funId": "Switch",
                    "name": "开关机",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.hvac.ctrlMode",
                    "dpt": "20.102",
                    "flags": 220,
                    "fp": 7,
                    "funId": "HVAC",
                    "name": "工作模式",
                    "objId": 7,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:2",
                    "dpt": "5.010",
                    "flags": 12,
                    "fp": 8,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "连网状态",
                    "objId": 8,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:setpoint",
                    "dpt": "9.001",
                    "flags": 220,
                    "fp": 9,
                    "funId": "Temperature",
                    "name": "温度设定",
                    "objId": 9,
                    "range": [
                        5,
                        35
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:1",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 10,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "温度带宽设定",
                    "objId": 10,
                    "range": [
                        0,
                        5
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:setpoint",
                    "dpt": "9.007",
                    "flags": 220,
                    "fp": 11,
                    "funId": "Humidity",
                    "name": "湿度设定",
                    "objId": 11,
                    "range": [
                        20,
                        70
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:1",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 12,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "湿度带宽设定",
                    "objId": 12,
                    "range": [
                        5,
                        20
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:2",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 13,
                    "funId": "Temperature",
                    "appHidden": true,
                    "name": "露点保护值设定",
                    "objId": 13,
                    "range": [
                        15,
                        25
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:3",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 14,
                    "funId": "Temperature",
                    "appHidden": true,
                    "name": "辅助系统开启判断温度",
                    "objId": 14,
                    "range": [
                        0,
                        10
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:4",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 15,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "露点判断设定",
                    "objId": 15,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:3",
                    "dpt": "5.004",
                    "flags": 156,
                    "fp": 16,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "是否启动辅助设定",
                    "objId": 16,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:4",
                    "dpt": "5.004",
                    "flags": 24,
                    "fp": 17,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "主设备和辅助设备选择",
                    "objId": 17,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:5",
                    "dpt": "5.004",
                    "flags": 156,
                    "fp": 18,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "阀门类型",
                    "objId": 18,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:current",
                    "dpt": "9.001",
                    "flags": 76,
                    "fp": 19,
                    "funId": "Temperature",
                    "name": "当前温度",
                    "objId": 19,
                    "range": [
                        -40,
                        40
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:current",
                    "dpt": "9.007",
                    "flags": 76,
                    "fp": 20,
                    "funId": "Humidity",
                    "name": "当前湿度",
                    "objId": 20,
                    "range": [
                        0,
                        100
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:dewpoint",
                    "dpt": "9.001",
                    "flags": 76,
                    "fp": 21,
                    "funId": "Temperature",
                    "name": "露点温度",
                    "objId": 21,
                    "range": [
                        -40,
                        40
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:5",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 22,
                    "funId": "value",
                    "name": "阀1运行状态",
                    "objId": 22,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:6",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 23,
                    "funId": "value",
                    "name": "阀2运行状态",
                    "objId": 23,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UShort:2",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 24,
                    "funId": "value",
                    "name": "故障显示",
                    "objId": 24,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 1,
                    "com": 2
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "China Jinmao",
                "model": "X3H-A01"
            },
            "spec": {},
            "sendTelRules": [
                6,
                7,
                9,
                11,
                19,
                20,
                21,
                22,
                23,
                24
            ],
            "period": 60,
            "status": 0,
            "chInfo": [
                {
                    "ch": 1,
                    "conDev": "GOLD-y3optQHNWRLm"
                }
            ]
        },
        {
            "name": "窗帘控制模块",
            "dvId": "GOLD-yxAzwwdlP12n",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "4d85ce6a-a102-4ecb-bb95-2b7a53d53421",
            "deviceType": 529,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 1,
                    "ackSet": true
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 3,
                    "ackSet": true
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 5,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 7,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 8,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 7,
                    "ackSet": true
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 9,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 10,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 9,
                    "ackSet": true
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 11,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 12,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 11,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 13,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 14,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 13,
                    "ackSet": true
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 15,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 16,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 15,
                    "ackSet": true
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 17,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 18,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 17,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 19,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 20,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 19,
                    "ackSet": true
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 21,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string"
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 22,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 21,
                    "ackSet": true
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 23,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 24,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 23,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%"
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 25,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.12",
                    "objs": [
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/9"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/31"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/13"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/35"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/39"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/17"
                            ],
                            "objId": 6
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/10"
                            ],
                            "objId": 7
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/32"
                            ],
                            "objId": 8
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/14"
                            ],
                            "objId": 9
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/36"
                            ],
                            "objId": 10
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/40"
                            ],
                            "objId": 11
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/18"
                            ],
                            "objId": 12
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/11"
                            ],
                            "objId": 13
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/33"
                            ],
                            "objId": 14
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/15"
                            ],
                            "objId": 15
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/37"
                            ],
                            "objId": 16
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/41"
                            ],
                            "objId": 17
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/19"
                            ],
                            "objId": 18
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/12"
                            ],
                            "objId": 19
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/34"
                            ],
                            "objId": 20
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/16"
                            ],
                            "objId": 21
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/38"
                            ],
                            "objId": 22
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/42"
                            ],
                            "objId": 23
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/20"
                            ],
                            "objId": 24
                        },
                        {
                            "gAddrs": [
                                "0/0/102"
                            ],
                            "objId": 25
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/W04.10.1"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6,
                8,
                10,
                12,
                14,
                16,
                18,
                20,
                22,
                24,
                25
            ],
            "heartbeat": 60,
            "status": 0,
            "chInfo": [
                {
                    "ch": 1,
                    "conDev": "GOLD-NJkdTjm6Dsh7"
                },
                {
                    "ch": 2,
                    "conDev": "GOLD-UNz9qfQfdGEv"
                },
                {
                    "ch": 3,
                    "conDev": "GOLD-9kuwvCKtPlHy"
                },
                {
                    "ch": 4,
                    "conDev": "GOLD-r0MG7DzhTJpT"
                }
            ]
        }
    ],
    "devices": [
        {
            "name": "方悦/四开四控面板面板",
            "dvId": "GOLD-qvPWuQfoSUvj",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "77c3c13d-d62e-4c4b-bc4c-77255cd496dc",
            "deviceType": 264,
            "attrs": [
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": false,
                    "name": "按键1短按",
                    "objId": 1,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 1,
                    "style": 1
                },
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": true,
                    "name": "按键1长按",
                    "objId": 2,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 2,
                    "style": 1
                },
                {
                    "btn": 2,
                    "bIdx": 3,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": false,
                    "name": "按键2短按",
                    "objId": 3,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 3,
                    "style": 1
                },
                {
                    "btn": 2,
                    "bIdx": 3,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": true,
                    "name": "按键2长按",
                    "objId": 4,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 4,
                    "style": 1
                },
                {
                    "btn": 3,
                    "bIdx": 5,
                    "createdRT": "bh.r.movement",
                    "dpt": "1.010",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": false,
                    "name": "按键3 上/下",
                    "objId": 5,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 5,
                    "style": 1
                },
                {
                    "btn": 3,
                    "bIdx": 5,
                    "createdRT": "bh.r.movement",
                    "dpt": "1.008",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": true,
                    "name": "按键3长按 停止/启动",
                    "objId": 6,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 6,
                    "style": 1
                },
                {
                    "btn": 4,
                    "bIdx": 7,
                    "createdRT": "bh.r.movement",
                    "dpt": "1.010",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": false,
                    "name": "按键4 上/下",
                    "objId": 7,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 7,
                    "style": 1
                },
                {
                    "btn": 4,
                    "bIdx": 7,
                    "createdRT": "bh.r.movement",
                    "dpt": "1.008",
                    "flags": 212,
                    "funId": "Curtain",
                    "lpress": true,
                    "name": "按键4长按 停止/启动",
                    "objId": 8,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 8,
                    "style": 1
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 9,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 9
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.14",
                    "objs": [
                        {
                            "btn": 1,
                            "gAddrs": [
                                "0/0/13"
                            ],
                            "objId": 1
                        },
                        {
                            "btn": 1,
                            "gAddrs": [
                                "0/0/9"
                            ],
                            "objId": 2
                        },
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/14"
                            ],
                            "objId": 3
                        },
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/10"
                            ],
                            "objId": 4
                        },
                        {
                            "btn": 3,
                            "gAddrs": [
                                "0/0/15"
                            ],
                            "objId": 5
                        },
                        {
                            "btn": 3,
                            "gAddrs": [
                                "0/0/11"
                            ],
                            "objId": 6
                        },
                        {
                            "btn": 4,
                            "gAddrs": [
                                "0/0/16"
                            ],
                            "objId": 7
                        },
                        {
                            "btn": 4,
                            "gAddrs": [
                                "0/0/12"
                            ],
                            "objId": 8
                        },
                        {
                            "gAddrs": [
                                "0/0/103"
                            ],
                            "objId": 9
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/PT4RA.1"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            "heartbeat": 60,
            "status": 0,
            "switchBindCh": [
                {
                    "btn": 1,
                    "ctrlInfo": [
                        {
                            "objId": 3,
                            "dvId": "GOLD-NJkdTjm6Dsh7"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 1,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-NJkdTjm6Dsh7"
                        }
                    ],
                    "lpress": true
                },
                {
                    "btn": 2,
                    "ctrlInfo": [
                        {
                            "objId": 3,
                            "dvId": "GOLD-UNz9qfQfdGEv"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 2,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-UNz9qfQfdGEv"
                        }
                    ],
                    "lpress": true
                },
                {
                    "btn": 3,
                    "ctrlInfo": [
                        {
                            "objId": 3,
                            "dvId": "GOLD-9kuwvCKtPlHy"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 3,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-9kuwvCKtPlHy"
                        }
                    ],
                    "lpress": true
                },
                {
                    "btn": 4,
                    "ctrlInfo": [
                        {
                            "objId": 3,
                            "dvId": "GOLD-r0MG7DzhTJpT"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 4,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-r0MG7DzhTJpT"
                        }
                    ],
                    "lpress": true
                }
            ]
        },
        {
            "name": "简约S 4按键触控面板（欧标）",
            "dvId": "GOLD-jRFcCzZmVT0c",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "77c3c13d-d62e-4c4b-bc4c-77255cd496dc",
            "deviceType": 264,
            "attrs": [
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键1",
                    "objId": 1,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 10
                },
                {
                    "btn": 2,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键2",
                    "objId": 2,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 11
                },
                {
                    "btn": 3,
                    "bIdx": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键1",
                    "objId": 3,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 12
                },
                {
                    "btn": 4,
                    "bIdx": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键2",
                    "objId": 4,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 13
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 5,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 14
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.13",
                    "objs": [
                        {
                            "btn": 1,
                            "gAddrs": [
                                "0/0/1"
                            ],
                            "objId": 1
                        },
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/2"
                            ],
                            "objId": 2
                        },
                        {
                            "btn": 3,
                            "gAddrs": [
                                "0/0/3"
                            ],
                            "objId": 3
                        },
                        {
                            "btn": 4,
                            "gAddrs": [
                                "0/0/4"
                            ],
                            "objId": 4
                        },
                        {
                            "gAddrs": [
                                "0/0/101"
                            ],
                            "objId": 5
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/TBP4.1"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2,
                3,
                4,
                5
            ],
            "heartbeat": 60,
            "status": 0,
            "switchBindCh": [
                {
                    "btn": 1,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-4WJPARFiL6fB"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 2,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-BqqNkb2WH1pL"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 3,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-YE7Ko36hXutX"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 4,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-ftyD0eilnq25"
                        }
                    ],
                    "lpress": false
                }
            ]
        },
        {
            "name": "方悦/双开双控面板",
            "dvId": "GOLD-NRaDSD44fb6W",
            "spaceId": "75473952-8ebe-4bea-aeb2-71ea7fde4e17",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "77c3c13d-d62e-4c4b-bc4c-77255cd496dc",
            "deviceType": 264,
            "attrs": [
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键1短按",
                    "objId": 1,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 15,
                    "style": 1
                },
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": true,
                    "name": "按键1长按",
                    "objId": 2,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 16,
                    "style": 1
                },
                {
                    "btn": 2,
                    "bIdx": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键2短按",
                    "objId": 3,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 17,
                    "style": 1
                },
                {
                    "btn": 2,
                    "bIdx": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "lpress": true,
                    "name": "按键2长按",
                    "objId": 4,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 18,
                    "style": 1
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 5,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 19
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.17",
                    "objs": [
                        {
                            "btn": 1,
                            "gAddrs": [
                                "0/0/21"
                            ],
                            "objId": 1
                        },
                        {
                            "btn": 1,
                            "gAddrs": [
                                "0/0/22"
                            ],
                            "objId": 2
                        },
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/25"
                            ],
                            "objId": 3
                        },
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/26"
                            ],
                            "objId": 4
                        },
                        {
                            "gAddrs": [
                                "0/0/105"
                            ],
                            "objId": 5
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/PT2RA.1"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2,
                3,
                4,
                5
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "RS485开关面板",
            "dvId": "GOLD-hByXbUt7tNLk",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "77c3c13d-d62e-4c4b-bc4c-77255cd496dc",
            "deviceType": 264,
            "attrs": [
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "fp": 1,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键1",
                    "objId": 1,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 2,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "fp": 2,
                    "funId": "Switch",
                    "lpress": false,
                    "name": "按键2",
                    "objId": 2,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "createdRT": "bh.r.value.bool:1",
                    "dpt": "1.001",
                    "flags": 156,
                    "fp": 5,
                    "funId": "Switch",
                    "appHidden": true,
                    "name": "LED1",
                    "objId": 3,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "createdRT": "bh.r.value.bool:2",
                    "dpt": "1.001",
                    "flags": 156,
                    "fp": 6,
                    "funId": "Switch",
                    "appHidden": true,
                    "name": "LED2",
                    "objId": 4,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 17,
                    "com": 3
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "China Jinmao",
                "model": "SWB11RS0"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2
            ],
            "status": 0,
            "switchBindCh": [
                {
                    "btn": 1,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-YE7Ko36hXutX"
                        }
                    ],
                    "lpress": false
                },
                {
                    "btn": 2,
                    "ctrlInfo": [
                        {
                            "objId": 1,
                            "dvId": "GOLD-ftyD0eilnq25"
                        }
                    ],
                    "lpress": false
                }
            ],
            "idxTag": "3/17/00"
        },
        {
            "name": "PM2.5 傳感器",
            "dvId": "GOLD-V9F4vRB2aPm2",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "94a6311b-d5c1-466c-a457-ab4ac1e06463",
            "deviceType": 788,
            "attrs": [
                {
                    "createdRT": "bh.r.airQualities:pm2p5",
                    "dpt": "9.008",
                    "flags": 76,
                    "fp": 1,
                    "funId": "AirQuality",
                    "name": "PM2.5浓度",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                }
            ],
            "commInfo": {
                "EnO": "0FAA0004",
                "protocol4GW": "EnO"
            },
            "hwInfo": {
                "brand": "AdvancedDevices",
                "model": "ADS-PM2.5/TH"
            },
            "spec": {},
            "sendTelRules": [
                1
            ],
            "period": 60,
            "status": 0
        },
        {
            "name": "方悦/6键液晶面板",
            "dvId": "GOLD-JUH1i2OartEB",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "77c3c13d-d62e-4c4b-bc4c-77255cd496dc",
            "deviceType": 264,
            "attrs": [
                {
                    "btn": 1,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "空调页面(无需设定)",
                    "objId": 1,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 2,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "空调开关",
                    "objId": 2,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 20
                },
                {
                    "btn": 3,
                    "bIdx": 3,
                    "createdRT": "bh.r.hvac.ctrlMode",
                    "dpt": "20.105",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "空调模式设定",
                    "objId": 3,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 21
                },
                {
                    "btn": 4,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "空调风速设定",
                    "objId": 4,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 22
                },
                {
                    "btn": 5,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature:setpoint",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "空调温度设定",
                    "objId": 5,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 23,
                    "style": 1
                },
                {
                    "btn": 6,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道1页面(无需设定)",
                    "objId": 6,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 7,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道1开关",
                    "objId": 7,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 24
                },
                {
                    "btn": 8,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道切換(无需设定)",
                    "objId": 8,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 9,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道1风速设定",
                    "objId": 9,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 25
                },
                {
                    "btn": 10,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道2页面(无需设定)",
                    "objId": 10,
                    "page": 3,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 11,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道2开关",
                    "objId": 11,
                    "page": 3,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 26
                },
                {
                    "btn": 12,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道切換(无需设定)",
                    "objId": 12,
                    "page": 3,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 13,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道2风速设定",
                    "objId": 13,
                    "page": 3,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 27
                },
                {
                    "btn": 14,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道3页面(无需设定)",
                    "objId": 14,
                    "page": 4,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 15,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道3开关",
                    "objId": 15,
                    "page": 4,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 28
                },
                {
                    "btn": 16,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道切換(无需设定)",
                    "objId": 16,
                    "page": 4,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 17,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道3风速设定",
                    "objId": 17,
                    "page": 4,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 29
                },
                {
                    "btn": 18,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道4页面(无需设定)",
                    "objId": 18,
                    "page": 5,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 19,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道4开关",
                    "objId": 19,
                    "page": 5,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 30
                },
                {
                    "btn": 20,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道切換(无需设定)",
                    "objId": 20,
                    "page": 5,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 21,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "新风通道4风速设定",
                    "objId": 21,
                    "page": 5,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 31
                },
                {
                    "btn": 22,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "HVAC页面(无需设定)",
                    "objId": 22,
                    "page": 6,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 23,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "HVAC开关",
                    "objId": 23,
                    "page": 6,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 32
                },
                {
                    "btn": 24,
                    "bIdx": 3,
                    "createdRT": "bh.r.hvac.ctrlMode",
                    "dpt": "20.105",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "HVAC模式设定",
                    "objId": 24,
                    "page": 6,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 33
                },
                {
                    "btn": 25,
                    "bIdx": 4,
                    "createdRT": "bh.r.airFlow.level",
                    "dpt": "5.100",
                    "flags": 212,
                    "funId": "HVAC",
                    "appHidden": true,
                    "lpress": false,
                    "name": "HVAC风速设定",
                    "objId": 25,
                    "page": 6,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "index": 34
                },
                {
                    "btn": 26,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "HVAC温度设定",
                    "objId": 26,
                    "page": 6,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 35,
                    "style": 1
                },
                {
                    "btn": 27,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1普通页面(无需设定)",
                    "objId": 27,
                    "page": 7,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 28,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1开关",
                    "objId": 28,
                    "page": 7,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 36
                },
                {
                    "btn": 29,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1模式切换(无需设定)",
                    "objId": 29,
                    "page": 7,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 30,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 30,
                    "page": 7,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 31,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1普通温度设定",
                    "objId": 31,
                    "page": 7,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 37,
                    "style": 1
                },
                {
                    "btn": 32,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1白天页面(无需设定)",
                    "objId": 32,
                    "page": 8,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 33,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1开关(无需设定)",
                    "objId": 33,
                    "page": 8,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 34,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1模式切换(无需设定)",
                    "objId": 34,
                    "page": 8,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 35,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 35,
                    "page": 8,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 36,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1白天温度设定",
                    "objId": 36,
                    "page": 8,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 38,
                    "style": 1
                },
                {
                    "btn": 37,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1夜晚页面(无需设定)",
                    "objId": 37,
                    "page": 9,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 38,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1开关(无需设定)",
                    "objId": 38,
                    "page": 9,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 39,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1模式切换(无需设定)",
                    "objId": 39,
                    "page": 9,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 40,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 40,
                    "page": 9,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 41,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1夜晚温度设定",
                    "objId": 41,
                    "page": 9,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 39,
                    "style": 1
                },
                {
                    "btn": 42,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1离开页面(无需设定)",
                    "objId": 42,
                    "page": 10,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 43,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1开关(无需设定)",
                    "objId": 43,
                    "page": 10,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 44,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1模式切换(无需设定)",
                    "objId": 44,
                    "page": 10,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 45,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 45,
                    "page": 10,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 46,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道1离开温度设定",
                    "objId": 46,
                    "page": 10,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 40,
                    "style": 1
                },
                {
                    "btn": 47,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2普通页面(无需设定)",
                    "objId": 47,
                    "page": 11,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 48,
                    "bIdx": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 212,
                    "funId": "Switch",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2开关",
                    "objId": 48,
                    "page": 11,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 41
                },
                {
                    "btn": 49,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2模式切换(无需设定)",
                    "objId": 49,
                    "page": 11,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 50,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 50,
                    "page": 11,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 51,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2普通温度设定",
                    "objId": 51,
                    "page": 11,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 42,
                    "style": 1
                },
                {
                    "btn": 52,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2白天页面(无需设定)",
                    "objId": 52,
                    "page": 12,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 53,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2开关(无需设定)",
                    "objId": 53,
                    "page": 12,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 54,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2模式切换(无需设定)",
                    "objId": 54,
                    "page": 12,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 55,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 55,
                    "page": 12,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 56,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2白天温度设定",
                    "objId": 56,
                    "page": 12,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 43,
                    "style": 1
                },
                {
                    "btn": 57,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2夜晚页面(无需设定)",
                    "objId": 57,
                    "page": 13,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 58,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2开关(无需设定)",
                    "objId": 58,
                    "page": 13,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 59,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2模式切换(无需设定)",
                    "objId": 59,
                    "page": 13,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 60,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 60,
                    "page": 13,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 61,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2夜晚温度设定",
                    "objId": 61,
                    "page": 13,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 44,
                    "style": 1
                },
                {
                    "btn": 62,
                    "bIdx": 1,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2离开页面(无需设定)",
                    "objId": 62,
                    "page": 14,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 63,
                    "bIdx": 2,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2开关(无需设定)",
                    "objId": 63,
                    "page": 14,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 64,
                    "bIdx": 3,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2模式切换(无需设定)",
                    "objId": 64,
                    "page": 14,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 65,
                    "bIdx": 4,
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.002",
                    "flags": 132,
                    "funId": "Value",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道切换(无需设定)",
                    "objId": 65,
                    "page": 14,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "btn": 66,
                    "bIdx": 5,
                    "createdRT": "bh.r.temperature",
                    "dpt": "9.001",
                    "flags": 212,
                    "funId": "Temperature",
                    "appHidden": true,
                    "lpress": false,
                    "name": "地暖通道2离开温度设定",
                    "objId": 66,
                    "page": 14,
                    "rt": [
                        "bh.r.attr.button"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 45,
                    "style": 1
                },
                {
                    "createdRT": "bh.r.value.bool",
                    "dpt": "1.003",
                    "flags": 212,
                    "funId": "Command",
                    "name": "空调风速自动",
                    "objId": 67,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 46
                },
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 68,
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 47
                },
                {
                    "createdRT": "bh.r.temperature:current",
                    "dpt": "9.001",
                    "flags": 204,
                    "funId": "Temperature",
                    "name": "当前温度",
                    "objId": 69,
                    "range": [
                        -5,
                        45
                    ],
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1,
                    "index": 48
                },
                {
                    "createdRT": "bh.r.humidity:current",
                    "dpt": "9.007",
                    "flags": 204,
                    "funId": "Humidity",
                    "name": "当前湿度",
                    "objId": 70,
                    "range": [
                        0,
                        100
                    ],
                    "page": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1,
                    "index": 49
                },
                {
                    "createdRT": "bh.r.airQualities:pm2p5",
                    "dpt": "9.008",
                    "flags": 204,
                    "funId": "AirQuality",
                    "name": "PM2.5浓度",
                    "objId": 71,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 50
                },
                {
                    "createdRT": "bh.r.airQualities:co2",
                    "dpt": "9.008",
                    "flags": 204,
                    "funId": "AirQuality",
                    "name": "CO2浓度",
                    "objId": 72,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 51
                },
                {
                    "createdRT": "bh.r.airQualities:tvoc",
                    "dpt": "9.008",
                    "flags": 204,
                    "funId": "AirQuality",
                    "name": "TVOC浓度",
                    "objId": 73,
                    "page": 2,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "index": 52
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.18",
                    "objs": [
                        {
                            "btn": 2,
                            "gAddrs": [
                                "0/0/46"
                            ],
                            "objId": 2
                        },
                        {
                            "btn": 3,
                            "gAddrs": [
                                "0/0/47"
                            ],
                            "objId": 3
                        },
                        {
                            "btn": 4,
                            "gAddrs": [
                                "0/0/48"
                            ],
                            "objId": 4
                        },
                        {
                            "btn": 5,
                            "gAddrs": [
                                "0/0/49"
                            ],
                            "objId": 5
                        },
                        {
                            "btn": 7,
                            "gAddrs": [
                                "0/0/54"
                            ],
                            "objId": 7
                        },
                        {
                            "btn": 9,
                            "gAddrs": [
                                "0/0/55"
                            ],
                            "objId": 9
                        },
                        {
                            "btn": 11,
                            "gAddrs": [
                                "0/0/57"
                            ],
                            "objId": 11
                        },
                        {
                            "btn": 13,
                            "gAddrs": [
                                "0/0/60"
                            ],
                            "objId": 13
                        },
                        {
                            "btn": 15,
                            "gAddrs": [
                                "0/0/61"
                            ],
                            "objId": 15
                        },
                        {
                            "btn": 17,
                            "gAddrs": [
                                "0/0/62"
                            ],
                            "objId": 17
                        },
                        {
                            "btn": 19,
                            "gAddrs": [
                                "0/0/63"
                            ],
                            "objId": 19
                        },
                        {
                            "btn": 21,
                            "gAddrs": [
                                "0/0/64"
                            ],
                            "objId": 21
                        },
                        {
                            "btn": 23,
                            "gAddrs": [
                                "0/0/65"
                            ],
                            "objId": 23
                        },
                        {
                            "btn": 24,
                            "gAddrs": [
                                "0/0/66"
                            ],
                            "objId": 24
                        },
                        {
                            "btn": 25,
                            "gAddrs": [
                                "0/0/67"
                            ],
                            "objId": 25
                        },
                        {
                            "btn": 26,
                            "gAddrs": [
                                "0/0/68"
                            ],
                            "objId": 26
                        },
                        {
                            "btn": 28,
                            "gAddrs": [
                                "0/0/69"
                            ],
                            "objId": 28
                        },
                        {
                            "btn": 31,
                            "gAddrs": [
                                "0/0/70"
                            ],
                            "objId": 31
                        },
                        {
                            "btn": 36,
                            "gAddrs": [
                                "0/0/71"
                            ],
                            "objId": 36
                        },
                        {
                            "btn": 41,
                            "gAddrs": [
                                "0/0/72"
                            ],
                            "objId": 41
                        },
                        {
                            "btn": 46,
                            "gAddrs": [
                                "0/0/73"
                            ],
                            "objId": 46
                        },
                        {
                            "btn": 48,
                            "gAddrs": [
                                "0/0/74"
                            ],
                            "objId": 48
                        },
                        {
                            "btn": 51,
                            "gAddrs": [
                                "0/0/75"
                            ],
                            "objId": 51
                        },
                        {
                            "btn": 56,
                            "gAddrs": [
                                "0/0/76"
                            ],
                            "objId": 56
                        },
                        {
                            "btn": 61,
                            "gAddrs": [
                                "0/0/77"
                            ],
                            "objId": 61
                        },
                        {
                            "btn": 66,
                            "gAddrs": [
                                "0/0/78"
                            ],
                            "objId": 66
                        },
                        {
                            "gAddrs": [
                                "0/0/50"
                            ],
                            "objId": 67
                        },
                        {
                            "gAddrs": [
                                "0/0/51"
                            ],
                            "objId": 68
                        },
                        {
                            "gAddrs": [
                                "0/0/52"
                            ],
                            "objId": 69
                        },
                        {
                            "gAddrs": [
                                "0/0/53"
                            ],
                            "objId": 70
                        },
                        {
                            "gAddrs": [
                                "0/0/56"
                            ],
                            "objId": 71
                        },
                        {
                            "gAddrs": [
                                "0/0/57"
                            ],
                            "objId": 72
                        },
                        {
                            "gAddrs": [
                                "0/0/58"
                            ],
                            "objId": 73
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/PT0L6.1"
            },
            "spec": {},
            "sendTelRules": [
                2,
                3,
                4,
                5,
                7,
                9,
                11,
                13,
                15,
                17,
                19,
                21,
                23,
                24,
                25,
                26,
                28,
                31,
                36,
                41,
                46,
                48,
                51,
                56,
                61,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73
            ],
            "heartbeat": 60,
            "period": 120,
            "status": 0
        },
        {
            "name": "CO2 三合一傳感器",
            "dvId": "GOLD-EXBAQMUmRdM8",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "94a6311b-d5c1-466c-a457-ab4ac1e06463",
            "deviceType": 788,
            "attrs": [
                {
                    "createdRT": "bh.r.humidity:current",
                    "dpt": "9.007",
                    "flags": 76,
                    "fp": 1,
                    "funId": "Humidity",
                    "name": "当前湿度",
                    "objId": 1,
                    "range": [
                        10,
                        95
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "createdRT": "bh.r.airQualities:co2",
                    "dpt": "9.008",
                    "flags": 76,
                    "fp": 2,
                    "funId": "AirQuality",
                    "name": "CO2浓度",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "createdRT": "bh.r.temperature:current",
                    "dpt": "9.001",
                    "flags": 76,
                    "fp": 3,
                    "funId": "Temperature",
                    "name": "当前温度",
                    "objId": 3,
                    "range": [
                        0,
                        50
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                }
            ],
            "commInfo": {
                "EnO": "0503E854",
                "protocol4GW": "EnO"
            },
            "hwInfo": {
                "brand": "AdvancedDevices",
                "model": "ADS-CO2/TH"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2,
                3
            ],
            "period": 60,
            "status": 0
        },
        {
            "name": "吸顶式移动传感器",
            "dvId": "GOLD-Mvg5cy4IiFwR",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "6b201239-4736-4f66-abcf-5fb64e468b33",
            "iconId": "94a6311b-d5c1-466c-a457-ab4ac1e06463",
            "deviceType": 263,
            "attrs": [
                {
                    "createdRT": "bh.r.dvHeartbeat",
                    "dpt": "1.006",
                    "flags": 196,
                    "funId": "Heartbeat",
                    "appHidden": true,
                    "name": "心跳",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 53
                },
                {
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 204,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 54
                },
                {
                    "createdRT": "bh.r.occupancy",
                    "dpt": "1.018",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "从传感器有/无人",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.sensor"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.15",
                    "objs": [
                        {
                            "gAddrs": [
                                "0/0/43"
                            ],
                            "objId": 1
                        },
                        {
                            "gAddrs": [
                                "0/0/1"
                            ],
                            "objId": 2
                        },
                        {
                            "gAddrs": [
                                ""
                            ],
                            "objId": 3
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "HDL",
                "model": "M/HS05.1-D"
            },
            "spec": {},
            "sendTelRules": [
                1,
                2
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "灯4",
            "dvId": "GOLD-ftyD0eilnq25",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "eea51bdc-3e07-47f6-ad62-db2f3f82b57d",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 55
                },
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 56
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.11",
                    "objs": [
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/4"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/8"
                            ],
                            "objId": 2
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "灯3",
            "dvId": "GOLD-YE7Ko36hXutX",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "eea51bdc-3e07-47f6-ad62-db2f3f82b57d",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 57
                },
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 58
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.11",
                    "objs": [
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/3"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/7"
                            ],
                            "objId": 2
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "灯1",
            "dvId": "GOLD-4WJPARFiL6fB",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "eea51bdc-3e07-47f6-ad62-db2f3f82b57d",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 59
                },
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 60
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.11",
                    "objs": [
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/1"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/5"
                            ],
                            "objId": 2
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "灯2",
            "dvId": "GOLD-BqqNkb2WH1pL",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "eea51bdc-3e07-47f6-ad62-db2f3f82b57d",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 148,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "index": 61
                },
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 76,
                    "funId": "Switch",
                    "name": "开关 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 62
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.11",
                    "objs": [
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/2"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/6"
                            ],
                            "objId": 2
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "灯5",
            "dvId": "GOLD-r23hAtVESYUB",
            "spaceId": "75473952-8ebe-4bea-aeb2-71ea7fde4e17",
            "parentId": "3813fff3-e20a-4e10-aad6-3c6f60074450",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "commInfo": {
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "heartbeat": 30,
            "status": 0
        },
        {
            "name": "灯6",
            "dvId": "GOLD-Ln5n4NqoRoXx",
            "spaceId": "75473952-8ebe-4bea-aeb2-71ea7fde4e17",
            "parentId": "3813fff3-e20a-4e10-aad6-3c6f60074450",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "commInfo": {
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "heartbeat": 30,
            "status": 0
        },
        {
            "name": "灯8",
            "dvId": "GOLD-lzFepqYJcXEu",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "b651ed64-1449-470d-8a6f-1c603f00a427",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 2,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 2,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 3,
                    "com": 2,
                    "ch": 2
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                1
            ],
            "heartbeat": 30,
            "status": 0,
            "idxTag": "2/3/0.2"
        },
        {
            "name": "灯7",
            "dvId": "GOLD-WI8ENdLoidVZ",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "b651ed64-1449-470d-8a6f-1c603f00a427",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 1,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 3,
                    "com": 2,
                    "ch": 1
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                1
            ],
            "heartbeat": 30,
            "status": 0,
            "idxTag": "2/3/0.1"
        },
        {
            "name": "灯10",
            "dvId": "GOLD-TgVHClbLJ5sA",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "b651ed64-1449-470d-8a6f-1c603f00a427",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 4,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 4,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 3,
                    "com": 2,
                    "ch": 4
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                1
            ],
            "heartbeat": 30,
            "status": 0,
            "idxTag": "2/3/0.4"
        },
        {
            "name": "灯9",
            "dvId": "GOLD-KNJul33ZdoNi",
            "spaceId": "1dcce3f9-9be9-482a-a159-ab85296656b5",
            "parentId": "b651ed64-1449-470d-8a6f-1c603f00a427",
            "iconId": "e9c9980d-c762-405d-b99c-16bd7c7f5281",
            "deviceType": 265,
            "attrs": [
                {
                    "chId": 3,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 3,
                    "funId": "Switch",
                    "name": "开关",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 3,
                    "com": 2,
                    "ch": 3
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                1
            ],
            "heartbeat": 30,
            "status": 0,
            "idxTag": "2/3/0.3"
        },
        {
            "name": "空调1",
            "dvId": "GOLD-y3optQHNWRLm",
            "spaceId": "83cbb0ac-3daa-4eea-ad52-ed23f0cff195",
            "parentId": "4515a49e-72b3-46f4-8b68-7723878c8053",
            "iconId": "2b9d3757-1ad1-4233-b227-c0b88144f84f",
            "deviceType": 768,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UShort:1",
                    "dpt": "1.001",
                    "flags": 8,
                    "fp": 1,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "版本号",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:1",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 2,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "上电恢复",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:2",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 3,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "地址远程锁定",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:1",
                    "dpt": "1.002",
                    "flags": 12,
                    "fp": 4,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "地址设定",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:3",
                    "dpt": "1.002",
                    "flags": 12,
                    "fp": 5,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "面板波特率设置锁定",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "oic.r.switch.binary",
                    "dpt": "1.001",
                    "flags": 220,
                    "fp": 6,
                    "funId": "Switch",
                    "name": "开关机",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.hvac.ctrlMode",
                    "dpt": "20.102",
                    "flags": 220,
                    "fp": 7,
                    "funId": "HVAC",
                    "name": "工作模式",
                    "objId": 7,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:2",
                    "dpt": "5.010",
                    "flags": 12,
                    "fp": 8,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "连网状态",
                    "objId": 8,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:setpoint",
                    "dpt": "9.001",
                    "flags": 220,
                    "fp": 9,
                    "funId": "Temperature",
                    "name": "温度设定",
                    "objId": 9,
                    "range": [
                        5,
                        35
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:1",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 10,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "温度带宽设定",
                    "objId": 10,
                    "range": [
                        0,
                        5
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:setpoint",
                    "dpt": "9.007",
                    "flags": 220,
                    "fp": 11,
                    "funId": "Humidity",
                    "name": "湿度设定",
                    "objId": 11,
                    "range": [
                        20,
                        70
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:1",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 12,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "湿度带宽设定",
                    "objId": 12,
                    "range": [
                        5,
                        20
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:2",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 13,
                    "funId": "Temperature",
                    "appHidden": true,
                    "name": "露点保护值设定",
                    "objId": 13,
                    "range": [
                        15,
                        25
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:3",
                    "dpt": "9.001",
                    "flags": 156,
                    "fp": 14,
                    "funId": "Temperature",
                    "appHidden": true,
                    "name": "辅助系统开启判断温度",
                    "objId": 14,
                    "range": [
                        0,
                        10
                    ],
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:4",
                    "dpt": "1.002",
                    "flags": 156,
                    "fp": 15,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "露点判断设定",
                    "objId": 15,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:3",
                    "dpt": "5.004",
                    "flags": 156,
                    "fp": 16,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "是否启动辅助设定",
                    "objId": 16,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:4",
                    "dpt": "5.004",
                    "flags": 24,
                    "fp": 17,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "主设备和辅助设备选择",
                    "objId": 17,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UChar:5",
                    "dpt": "5.004",
                    "flags": 156,
                    "fp": 18,
                    "funId": "Value",
                    "appHidden": true,
                    "name": "阀门类型",
                    "objId": 18,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:current",
                    "dpt": "9.001",
                    "flags": 76,
                    "fp": 19,
                    "funId": "Temperature",
                    "name": "当前温度",
                    "objId": 19,
                    "range": [
                        -40,
                        40
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.humidity:current",
                    "dpt": "9.007",
                    "flags": 76,
                    "fp": 20,
                    "funId": "Humidity",
                    "name": "当前湿度",
                    "objId": 20,
                    "range": [
                        0,
                        100
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.temperature:dewpoint",
                    "dpt": "9.001",
                    "flags": 76,
                    "fp": 21,
                    "funId": "Temperature",
                    "name": "露点温度",
                    "objId": 21,
                    "range": [
                        -40,
                        40
                    ],
                    "rt": [
                        "bh.r.attr.sensor",
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "number",
                    "step": 1
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:5",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 22,
                    "funId": "value",
                    "name": "阀1运行状态",
                    "objId": 22,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.bool:6",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 23,
                    "funId": "value",
                    "name": "阀2运行状态",
                    "objId": 23,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "boolean"
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.value.UShort:2",
                    "dpt": "1.002",
                    "flags": 76,
                    "fp": 24,
                    "funId": "value",
                    "name": "故障显示",
                    "objId": 24,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {},
                    "valueKey": "value",
                    "valueType": "integer"
                }
            ],
            "commInfo": {
                "MdB": {
                    "addr": 1,
                    "com": 2,
                    "ch": 1
                },
                "protocol4GW": "MdB"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                6,
                7,
                9,
                11,
                19,
                20,
                21,
                22,
                23,
                24
            ],
            "heartbeat": 30,
            "period": 60,
            "status": 0,
            "idxTag": "2/1/0.1"
        },
        {
            "name": "窗帘3",
            "dvId": "GOLD-9kuwvCKtPlHy",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "5770d0eb-0e4d-4caa-8b2f-655537c9a480",
            "iconId": "77f5f228-7c0b-43a2-ae2c-ed6202de54f5",
            "deviceType": 514,
            "attrs": [
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 63
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 64
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 65
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 3,
                    "ackSet": true,
                    "index": 66
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%",
                    "index": 67
                },
                {
                    "chId": 3,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 5,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%",
                    "index": 68
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.12",
                    "objs": [
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/11"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/33"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/15"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/37"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/41"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 3,
                            "gAddrs": [
                                "0/0/19"
                            ],
                            "objId": 6
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "窗帘1",
            "dvId": "GOLD-NJkdTjm6Dsh7",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "5770d0eb-0e4d-4caa-8b2f-655537c9a480",
            "iconId": "77f5f228-7c0b-43a2-ae2c-ed6202de54f5",
            "deviceType": 514,
            "attrs": [
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 69
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 70
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 71
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 3,
                    "ackSet": true,
                    "index": 72
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%",
                    "index": 73
                },
                {
                    "chId": 1,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 5,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%",
                    "index": 74
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.12",
                    "objs": [
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/9"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/31"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/13"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/35"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/39"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 1,
                            "gAddrs": [
                                "0/0/17"
                            ],
                            "objId": 6
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "窗帘2",
            "dvId": "GOLD-UNz9qfQfdGEv",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "5770d0eb-0e4d-4caa-8b2f-655537c9a480",
            "iconId": "77f5f228-7c0b-43a2-ae2c-ed6202de54f5",
            "deviceType": 514,
            "attrs": [
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 75
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 76
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 77
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 3,
                    "ackSet": true,
                    "index": 78
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%",
                    "index": 79
                },
                {
                    "chId": 2,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 5,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%",
                    "index": 80
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.12",
                    "objs": [
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/10"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/32"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/14"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/36"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/40"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 2,
                            "gAddrs": [
                                "0/0/18"
                            ],
                            "objId": 6
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6
            ],
            "heartbeat": 60,
            "status": 0
        },
        {
            "name": "窗帘4",
            "dvId": "GOLD-r0MG7DzhTJpT",
            "spaceId": "d6807a65-d3fe-40ee-9568-bdf1fd72ec09",
            "parentId": "5770d0eb-0e4d-4caa-8b2f-655537c9a480",
            "iconId": "77f5f228-7c0b-43a2-ae2c-ed6202de54f5",
            "deviceType": 514,
            "attrs": [
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "上/下",
                    "objId": 1,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 81
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:UpDown",
                    "dpt": "1.008",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "上/下 状态",
                    "objId": 2,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "down": "下",
                        "up": "上"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 1,
                    "ackSet": true,
                    "index": 82
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 148,
                    "funId": "Moving",
                    "name": "停止",
                    "objId": 3,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "index": 83
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.movement:StartStop",
                    "dpt": "1.010",
                    "flags": 76,
                    "funId": "Moving",
                    "name": "停止 状态",
                    "objId": 4,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueDefs": {
                        "start": "启动",
                        "stop": "停止"
                    },
                    "valueKey": "value",
                    "valueType": "string",
                    "ack4Obj": 3,
                    "ackSet": true,
                    "index": 84
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 148,
                    "funId": "Curtain",
                    "name": "百分比",
                    "objId": 5,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "unit": "%",
                    "unitName": "%",
                    "index": 85
                },
                {
                    "chId": 4,
                    "createdRT": "bh.r.openLevel",
                    "dpt": "5.001",
                    "flags": 76,
                    "funId": "Curtain",
                    "name": "开启 状态",
                    "objId": 6,
                    "rt": [
                        "bh.r.attr.actuator"
                    ],
                    "valueKey": "value",
                    "valueType": "integer",
                    "ack4Obj": 5,
                    "ackSet": true,
                    "unit": "%",
                    "unitName": "%",
                    "index": 86
                }
            ],
            "commInfo": {
                "KNX": {
                    "pAddr": "1.1.12",
                    "objs": [
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/12"
                            ],
                            "objId": 1
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/34"
                            ],
                            "objId": 2
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/16"
                            ],
                            "objId": 3
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/38"
                            ],
                            "objId": 4
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/42"
                            ],
                            "objId": 5
                        },
                        {
                            "ch": 4,
                            "gAddrs": [
                                "0/0/20"
                            ],
                            "objId": 6
                        }
                    ]
                },
                "protocol4GW": "KNX"
            },
            "hwInfo": {
                "brand": "None",
                "model": "Non"
            },
            "spec": {},
            "sendTelRules": [
                2,
                4,
                6
            ],
            "heartbeat": 60,
            "status": 0
        }
    ],
    "cloud": 8,
    "license": 1940515200000,
    "server": "beta"
}
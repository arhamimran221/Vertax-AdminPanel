import React from "react";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./Agreements.css"
const columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "No",
  },
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="moredetail-showmore"><button><EyeOutlined /> Show More </button></div>
    ),
  },
];
const data = [
  {
    key: "1",
    ID: "76",

    No: 1,
  },
  {
    key: "2",
    ID: "56",

    No: 2,
  },
  {
    key: "3",
    ID: "98",

    No: 3,
  },
  {
    key: "4",
    ID: "61",

    No: 4,
  },
  {
    key: "5",
    ID: "73",

    No: 5,
  },
  {
    key: "6",
    ID: "45",

    No: 6,
  },
  {
    key: "7",
    ID: "34",

    No: 7,
  },
  {
    key: "8",
    ID: "32",

    No: 8,
  },
];

const AgreementsData = () => <Table columns={columns} dataSource={data} />;
export default AgreementsData;

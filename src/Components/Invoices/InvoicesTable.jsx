import React from "react";
import { Table, Select } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "./Invoices.css";
const { Option } = Select;
const columns = [
  {
    title: "Invoice ID",
    dataIndex: "InvoiceID",
    key: "InvoiceID",
  },
  {
    title: "Booking ID",
    dataIndex: "BookingID",
    key: "BookingID",
  },
  {
    title: "Car",
    dataIndex: "Car",
    key: "Car",
  },

  {
    title: "Car Number",
    dataIndex: "CarNumber",
    key: "CarNumber",
  },
  {
    title: "Weekly Amount",
    dataIndex: "WeeklyAmount",
    key: "WeeklyAmount",
  },
  {
    title: "Pending Amount",
    dataIndex: "PendingAmount",
    key: "PendingAmount",
  },
  {
    title: "Status",
    key: "Status",
    render: (_, record) => (
      <div className={`moredetail-icon-Invoices ${record.PendingAmount !== "£0" ? "pending-red" : ""}`}>
        <button>
          {record.PendingAmount === "£0" ? "Completed" : "Pending"}
        </button>
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="moredetail-icon-booking">
        <MoreOutlined style={{ fontWeight: "bolder" }} />
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    BookingID: "VTX-246",
    PendingAmount: "£456",
    CarNumber: "234",
    WeeklyAmount: "£955789",
    Car: "TESLA",
    InvoiceID: 1,
  },
  {
    key: "2",
    BookingID: "VTX-296",
    PendingAmount: "£0",
    CarNumber: "987tdf",
    WeeklyAmount: "£256789",
    Car: "Jawad BMW",
    InvoiceID: 2,
  },
  {
    key: "3",
    BookingID: "VTX-241",
    PendingAmount: "£4567",
    CarNumber: "ghb32",
    WeeklyAmount: "£256789",
    Car: "Jawad BMW",
    InvoiceID: 3,
  },
  {
    key: "4",
    BookingID: "VTX-446",
    PendingAmount: "£0",
    CarNumber: "3456tfg",
    WeeklyAmount: "£678",
    Car: "Jawad BMW",
    InvoiceID: 4,
  },
  {
    key: "5",
    BookingID: "VTX-196",
    PendingAmount: "£0",
    CarNumber: "fcgvhb6",
    WeeklyAmount: "£256789",
    Car: "Jawad BMW",
    InvoiceID: 5,
  },
  {
    key: "6",
    BookingID: "VTX-186",
    PendingAmount: "£0",
    CarNumber: "fxcgvhb66",
    WeeklyAmount: "£25789",
    Car: "Jawad BMW",
    InvoiceID: 6,
  },
  {
    key: "7",
    BookingID: "VTX-151",
    PendingAmount: "£0",
    CarNumber: "ghj678",
    WeeklyAmount: "£15789",
    Car: "Jawad BMW",
    InvoiceID: 7,
  },
  {
    key: "8",
    BookingID: "VTX-234",
    PendingAmount: "£20000",
    CarNumber: "cfgv666",
    WeeklyAmount: "£256789",
    Car: "Jawad BMW",
    InvoiceID: 8,
  },
];

const InvoicesTable = () => <Table columns={columns} dataSource={data} />;
export default InvoicesTable;

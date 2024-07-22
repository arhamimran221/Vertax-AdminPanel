import React from 'react';
import { Table, Select } from 'antd';
import {MoreOutlined} from '@ant-design/icons'
import "./Booking.css"
const { Option } = Select;
const columns = [
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No',
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Car',
    dataIndex: 'Car',
    key: 'Car',
  },
  {
    title: 'Number',
    dataIndex: 'Number',
    key: 'Number',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    render: (text, record) => (
      <Select defaultValue={'Status'} style={{ width: 120 }}>
        <Option value="Pending">Pending</Option>
        <Option value="Confirmed">Confirmed</Option>
        <Option value="Cancelled">Cancelled</Option>
      </Select>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className='moredetail-icon-booking'>
          <MoreOutlined style={{fontWeight:'bolder'}}/>
      </div>
    
    ),
  },
];
const data = [
  {
    key: '1',
    No: 'VTX-246',
    Type: 'Booking',
    Email: 'umair@gmail.com',
    Name:'Hardik Savani',
    Car:'TESLA',
    Number:'+923008413519',
  },
  {
    key: '2',
    No: 'VTX-296',
    Type: ' Booking ',
    Email: 'arham@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

  },
  {
    key: '3',
    No: 'VTX-241',
    Type: 'Booking',
    Email: 'waqar@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

    
  },
  {
    key: '4',
    No: 'VTX-446',
    Type: 'Booking',
    Email: 'abc@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

   
  },
  {
    key: '5',
    No: 'VTX-196',
    Type: 'Booking',
    Email: 'xyz@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

    
  },
  {
    key: '6',
    No: 'VTX-186',
    Type: 'Booking',
    Email: 'you@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',


  },
  {
    key: '7',
    No: 'VTX-151',
    Type: 'Booking',
    Email: 'zaheerhussain@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

  
  },
  {
    key: '8',
    No: 'VTX-234',
    Type: 'Booking',
    Email: 'zaheerhussain@gmail.com',
    Name:'Hardik Savani',
    Car:'Jawad BMW',
    Number:'+923008413519',

   
  },
];

const BookingTable = () => <Table  columns={columns} dataSource={data} />;
export default BookingTable;

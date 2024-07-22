import React from 'react';
import {  Table } from 'antd';
import {MoreOutlined} from '@ant-design/icons'
import "../Cars/Cars.css"
const columns = [
  {
    title: 'No',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: 'Model',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Number',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Transmission',
    dataIndex: 'Transmission',
    key: 'Transmission',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className='moredetail-icon'>
          <MoreOutlined style={{fontWeight:'bolder'}}/>
      </div>
    
    ),
  },
];
const data = [
  {
    key: '1',
    name: '1',
    age: 'Honda Civic Reborn',
    address: 'LOC-2344',
    Transmission:'Auto',
    Price:435678, 
  },
  {
    key: '2',
    name: '2',
    age: ' BMW ',
    address: 'EMH-364U',
    Transmission:'Manuel',
    Price:45678,
  },
  {
    key: '3',
    name: '3',
    age: 'honda',
    address: 'TWR-4567',
    Transmission:'Manuel',
    Price:65767,
    
  },
  {
    key: '3',
    name: '3',
    age: 'Cultus',
    address: 'POk-87567',
    Transmission:'Manuel',
    Price:34567,
   
  },
  {
    key: '3',
    name: '4',
    age: 'Mazda',
    address: 'YTF-0467',
    Transmission:'Auto',
    Price:10029,
    
  },
  {
    key: '3',
    name: '5',
    age: 'Rolls-Royce',
    address: '3VN-456',
    Transmission:'Manuel',
    Price:31000000,

  },
  {
    key: '3',
    name: '6',
    age: 'Lamborghini',
    address: 'dgh-4567',
    Transmission:'Auto',
    Price:19000000,
  
  },
  {
    key: '3',
    name: '7',
    age: 'Ferrari',
    address: 'rdd-465',
    Transmission:'Auto',
    Price:4100000,
   
  },
];

const DataTable = () => <Table  columns={columns} dataSource={data} />;
export default DataTable;

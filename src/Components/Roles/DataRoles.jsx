import React from 'react';
import {Table} from 'antd';
import {MoreOutlined} from '@ant-design/icons'
// import "./Users.css"

const columns = [
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
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
    No: '1',
    Email: 'umair@gmail.com',
    Name:'Hardik Savani',
    Car:'TESLA',  },
  {
    key: '2',
    No: '2',
    Type: ' Booking ',
    Email: 'arham@gmail.com',
    Name:'Hardik Savani',
  },
  {
    key: '3',
    No: '3',
    Email: 'waqar@gmail.com',
    Name:'Hardik Savani',
    
  },
  {
    key: '4',
    No: '4',
    Email: 'abc@gmail.com',
    Name:'Hardik Savani',
   
  },
  {
    key: '5',
    No: '5',
    Email: 'xyz@gmail.com',
    Name:'Hardik Savani',
    
  },
  {
    key: '6',
    No: '6',
    Email: 'you@gmail.com',
    Name:'Hardik Savani',

  },
  {
    key: '7',
    No: '7',
    Email: 'zaheerhussain@gmail.com',
    Name:'Hardik Savani',
  
  },
  {
    key: '8',
    No: '8',
    Email: 'zaheerhussain@gmail.com',
    Name:'Hardik Savani',
   
  },
];

const DataRoles = () => <Table  columns={columns} dataSource={data} />
export default DataRoles;

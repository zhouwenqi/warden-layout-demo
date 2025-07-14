import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps} from 'antd';
import { Badge, Dropdown, Space, Table,DatePicker,Select,TimePicker } from 'antd';
import { Container } from 'warden-layout';

const { RangePicker } = DatePicker;

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  
const columns: TableColumnsType<DataType> = [
{
    title: 'Name',
    dataIndex: 'name',
    filters: [
    {
        text: 'Joe',
        value: 'Joe',
    },
    {
        text: 'Category 1',
        value: 'Category 1',
        children: [
        {
            text: 'Yellow',
            value: 'Yellow',
        },
        {
            text: 'Pink',
            value: 'Pink',
        },
        ],
    },
    {
        text: 'Category 2',
        value: 'Category 2',
        children: [
        {
            text: 'Green',
            value: 'Green',
        },
        {
            text: 'Black',
            value: 'Black',
        },
        ],
    },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: '30%',
},
{
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
},
{
    title: 'Address',
    dataIndex: 'address',
    filters: [
    {
        text: 'London',
        value: 'London',
    },
    {
        text: 'New York',
        value: 'New York',
    },
    ],
    onFilter: (value, record) => record.address.startsWith(value as string),
    filterSearch: true,
    width: '40%',
},
];

const data: DataType[] = [
{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
},
{
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
},
{
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
},
{
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
},
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
console.log('params', pagination, filters, sorter, extra);
};

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

interface GroupDataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const expandDataSource = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => ({
  key: i.toString(),
  date: '2014-12-24 23:12:00',
  name: 'This is production name',
  upgradeNum: 'Upgraded: 56',
}));

const dataSource = Array.from({ length: 3 }).map<GroupDataType>((_, i) => ({
  key: i.toString(),
  name: 'Screen',
  platform: 'iOS',
  version: '10.3.4.5654',
  upgradeNum: 500,
  creator: 'Jack',
  createdAt: '2014-12-24 23:12:00',
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Status',
    key: 'state',
    render: () => <Badge status="success" text="Finished" />,
  },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    key: 'operation',
    render: () => (
      <Space size="middle">
        <a>Pause</a>
        <a>Stop</a>
        <Dropdown menu={{ items }}>
          <a>
            More <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    ),
  },
];

const groupColumns: TableColumnsType<GroupDataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
];

const expandedRowRender = () => (
  <Table<ExpandedDataType>
    columns={expandColumns}
    dataSource={expandDataSource}
    pagination={false}
  />
);


const App: React.FC = () => {
    return(      
        <>
        <Container mode="panel">
            <Space>
              <TimePicker />
              <DatePicker />
              <RangePicker />
            </Space>            
            <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
            <Table<GroupDataType>
            columns={groupColumns}
            expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
            dataSource={dataSource}
            />         
        </Container>
        </>)
}

export default App;
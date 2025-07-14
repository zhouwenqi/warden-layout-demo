import React,{useState,useEffect} from 'react';
import { Divider, List, Typography,Skeleton,Button,Avatar } from 'antd';
import { Container, SvgIcon } from 'warden-layout/dist/esm';



interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }
  
  const count = 3;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const App: React.FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [list, setList] = useState<DataType[]>([]);
  
    useEffect(() => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          setInitLoading(false);
          setData(res.results);
          setList(res.results);
        });
    }, []);
  
    const onLoadMore = () => {
      setLoading(true);
      setList(
        data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
      );
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          const newData = data.concat(res.results);
          setData(newData);
          setList(newData);
          setLoading(false);
          window.dispatchEvent(new Event('resize'));
        });
    };
  
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button type="text" onClick={onLoadMore} icon={<SvgIcon src="/svg/menu/main-down-more.svg" width={16} height={16}  style={{lineHeight:"1rem",color:"currentColor"}}/>}></Button>
        </div>
      ) : null;
  
    return (
        <Container mode="panel">
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
            <Button type="text" key="list-edit"><SvgIcon src="/svg/menu/main-edit.svg" width={16} height={16} style={{lineHeight:"1rem",color:"currentColor"}} /></Button>,
            <Button type="text" key="list-more"><SvgIcon src="/svg/menu/main-more.svg" width={16} height={16} style={{lineHeight:"1rem",color:"currentColor"}} /></Button>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://warden.microwarp.com">{item.name?.last}</a>}
                description="I'm too lazy to typeset, just copy antd's demo directly"
              />
              <div>content...</div>
            </Skeleton>
          </List.Item>
        )}
      /></Container>
    );
    
}


export default App;
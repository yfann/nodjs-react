
import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';
import store from '../../store/main';

render(<Demo />, document.getElementById('main-container')); 

/*
import Table from 'rc-table';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/main';
import 'rc-table/assets/index.css';

const columns = [{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Address', dataIndex: 'address', key:'address', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="#">Delete</a>,
}];
 
const data = [
  { name: 'Jack', age: 28, address: 'some where', key:'1' },
  { name: 'Rose', age: 36, address: 'some where', key:'2' },
];
 
store.getAllData(function (data) {
        	var i = 0;
        	var len = data.length;
          var list = [];
        	for(; i<len; i++) {
            list.push({
              name:i,
              address:data[i].Message,
              key: i
            });
          }
          
          render(
            <div>
            <h1>Service HeartBeat Table </h1>
            <Table columns={columns} data={list} />
            </div>,
            document.getElementById('main-container')
          );
        })
*/
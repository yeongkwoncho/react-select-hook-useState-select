import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  // const [addrtype, setAddrtype] = useState(["Work", "Home", "school"])
  // const Add = addrtype.map(Add => Add
  // )
  // const handleAddrTypeChange = (e) => {console.clear(), console.log((addrtype[e.target.value]))}

  // return (
  //   < select
  //     onChange={e => handleAddrTypeChange(e)}
  //     className="browser-default custom-select" >
  //     {
  //       Add.map((address, key) => <option key={key}value={key}>{address}</option>)
  //     }
  //   </select >)

  const [Content, setContent] = useState();

  const onChangeHandler = (e) => {
    setContent(e.currentTarget.value);
  };

  const Options = [
    { key: 1, value: '1번 옵션' },
    { key: 2, value: '2번 옵션' },
    { key: 3, value: '3번 옵션' },
    { key: 4, value: '4번 옵션' },
    { key: 5, value: '5번 옵션' },
  ];

  return (
    <select onChange={onChangeHandler} value={Content}>
      {Options.map((item, index) => (
        <option key={item.key} value={item.key}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

render(<App />, document.getElementById('root'));

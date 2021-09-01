// import CC from 'component/ShopCard';
// import Login from 'scenes/Login';
import React, { useState } from 'react';
import './App.css';
// import Homepage from 'scenes/Homepage';
// import Cart from 'scenes/Cart';

function App() {
  const [dat, setDat] = React.useState({});

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const _FIRST__URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const _SECOND__URL = 'https://animechan.vercel.app/api/random';
    fetch(_SECOND__URL)
      .then((response: any) => {
        return response.json();
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('an error happened.. ' + error);
      });
  };
  return (
    <div className="App">
      <div>hello test</div>
      {/* <Login></Login>
      <p>hello</p>
      <p>{dat.title}</p>
      <CC value={setDat}></CC> */}
    </div>
  );
}
export default App;

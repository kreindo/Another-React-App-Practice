import CC from 'component/ShopCard';
import React, { useState, useEffect } from 'react';
import Login from 'scenes/Login';
import './App.css';
// import Homepage from 'scenes/Homepage';
// import Cart from 'scenes/Cart';

function App() {
  const [dat, setDat] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      const data = await response.json();
      const final = data.quotes;
      setDat(final);
    }

    return () => {};
  }, []);

  return (
    <div className="App">
      {dat && <div>{dat}</div>}

      {/* <Login></Login>
      <p>hello</p>
      <p>{dat.title}</p>
      <CC value={setDat}></CC> */}
    </div>
  );
}

export default App;

// import CC from 'component/ShopCard';
// import Login from 'scenes/Login';
import React, { useState } from 'react';
import './App.css';
// import Homepage from 'scenes/Homepage';
// import Cart from 'scenes/Cart';

function App() {
  const [dat, setDat] = React.useState(true);
  const [post, setPosts] = React.useState();
  const [post2, setPosts2] = React.useState();

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
        setDat(false);
        console.log(response.quote);
        if (response.quote) {
          setPosts(response.quote);
          setPosts2(response.character);
        } else {
          console.log('An error happened when fetching data');
        }
      })
      .catch((error) => {
        setDat(false);
        console.log('an error happened.. ' + error);
      });
  };

  const content = dat ? (
    <div>Loading...</div>
  ) : (
    <div className="center">
      <pre>{JSON.stringify(post2, null, 1)}</pre>
      <br />
      <pre>{JSON.stringify(post, null, 1)}</pre>
    </div>
  );

  return (
    <div className="App">
      <div>Quotes</div>
      {content}
      {/* <Login></Login>
      <p>hello</p>
      <p>{dat.title}</p>
      <CC value={setDat}></CC> */}
    </div>
  );
}
export default App;

import CC from 'component/ShopCard';
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
  // client_secret 2d06f2566d6d4efec2f884f143af19f2ccea5c6a
  const getData = () => {
    const _FIRST__URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const _SECOND__URL = 'https://animechan.vercel.app/api/random';
    const _THIRD__URL = 'https://www.boredapi.com/api/activity';
    const _IMG__URL = 'https://api.imgur.com/3/gallery/search?q=cats';
    fetch(_IMG__URL, {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Client-ID 971a7476ddb7eaf',
      }),
    })
      .then((response: any) => {
        return response.json();
      })
      .then((response: any) => {
        setDat(false);
        console.log(response.data[0]);
        if (response) {
          setPosts(response);
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
    <div>Loading data...</div>
  ) : (
    <div className="center">
      <pre>{JSON.stringify(post, null, 1)}</pre>
      <br />
      <pre>{JSON.stringify(post2, null, 1)}</pre>
    </div>
  );

  return (
    <div className="App">
      <div>Random stuff to do</div>
      <br />
      <CC value={content}></CC>
      {/* <Login></Login>
      <p>hello</p>
      <p>{dat.title}</p>*/}
    </div>
  );
}
export default App;

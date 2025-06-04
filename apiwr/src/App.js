import {useState,useEffect} from 'react';
import {getPosts,getRandomUser} from "./api";
import './App.css';

import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
  const [posts, setPosts] = useState([]);
  const [userData, setUser] = useState({});
  useEffect(()=>{
    getPosts().then(posts => setPosts(posts));
  },[])

  useEffect(()=>{
    getRandomUser().then((user) => setUser(user.results[0]));
  },[])

  const refresh = () => {
  getRandomUser().then((user) => setUser(user.results[0]));
};

  console.log(userData)
  return (
    <div className="App">
      {userData && <UserCard data={userData}/>}
       <button onClick={refresh}>Refresh User</button>
      {posts ? posts.map((e) => <PostCard title={e.title} body={e.body}/>) : <p>No Posts</p>}
        
    </div>
  );
}

export default App;

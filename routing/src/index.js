import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams, NavLink } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="post-container">
      <h2>All Posts</h2>
      {posts.map((post) => (
        <NavLink
          key={post.id}
          to={`/post/${post.id}`}
          style={{ display: "block", marginBottom: "10px" }}
        >
          {post.title}
        </NavLink>
      ))}
    </div>
  );
};

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
  </div>
);

const Settings = () => (
  <div>
    <h1>Settings Page</h1>
  </div>
);

const SayUser = () => {
  const { userName } = useParams();
  return <h1>Your name is: {userName}</h1>;
};

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/user/:userName" element={<SayUser />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/setting" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

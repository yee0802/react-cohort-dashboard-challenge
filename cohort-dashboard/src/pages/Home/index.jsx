import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost/CreatePost";
import PostList from "./components/PostList/PostList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchPosts = () => {
    fetch("https://boolean-api-server.fly.dev/yee0802/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setRefresh(false);
      });
  };

  useEffect(fetchPosts, [refresh]);

  return (
    <div className="home-container">
      <CreatePost setRefresh={setRefresh} />
      <PostList posts={posts} setRefresh={setRefresh} />
    </div>
  );
}

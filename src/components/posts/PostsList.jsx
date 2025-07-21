import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { List, Spin } from "antd";
import { useInView } from "react-intersection-observer";
import "./PostsList.css";
import { useGetPostsQuery } from "../../api/PostsApi";

const LIMIT = 10;

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { data, isLoading, error } = useGetPostsQuery({ limit: LIMIT, skip });
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (data && data.posts) {
      setPosts((prev) => [...prev, ...data.posts]);
      if (posts.length + data.posts.length >= data.total) setHasMore(false);
    }
  }, [data]);

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      setSkip((prev) => prev + LIMIT);
    }
  }, [inView, isLoading, hasMore]);

  if (error) return <div>Ошибка загрузки</div>;

  return (
    <div className="posts-list">
      <List
        dataSource={posts}
        renderItem={(item) => <PostCard key={item.id} post={item} />}
      />
      {isLoading && <Spin />}
      {hasMore && <div ref={ref} style={{ height: 1 }} />}
      {!hasMore && <div className="posts-end">Больше новостей нет</div>}
    </div>
  );
}

export default PostsList;

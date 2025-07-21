import React from "react";
import { Card, Tag } from "antd";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <Card title={post.title} className="post-card">
      <div className="post-body-clamp">{post.body}</div>
      <div className="post-tags">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="post-reactions">
        Реакций: {post.reactions.likes + post.reactions.dislikes} (лайков:{" "}
        {post.reactions.likes}, дизлайков: {post.reactions.dislikes})
      </div>
    </Card>
  );
}

export default PostCard;

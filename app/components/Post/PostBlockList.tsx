import React from "react";
import { Post } from '@/app/types';
import PostBlock from '@/app/components/Post/PostBlock';
import Pagination from '@/app/components/Post/Pagination';

type Props = {
  posts: Post[],
  totalPages: number
}

const PostBlockList = ({ posts, totalPages }: Props) => {
  const postBlocks: React.JSX.Element[] = [];

  if (posts.length > 0) {
    for (const post of posts) {
      postBlocks.push(<PostBlock post={ post } />);
    }
  
    return (
      <div id="post-list">
        { postBlocks }
        <Pagination totalPages={ totalPages } />
      </div>
    );
  }
  return (
    <div>No posts available.</div>
  )
}

export default PostBlockList;

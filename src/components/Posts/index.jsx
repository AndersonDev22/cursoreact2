import { PostsContext } from "../../contexts/PostsProvider/context";
import { useContext, useEffect } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);


  return (
    <div>
      <h1>Componente Posts</h1>
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

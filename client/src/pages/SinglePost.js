import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';

// context
import { UserContext } from '../context/UserContext';

const SinglePost = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((res) => {
      res.json().then((post) => {
        setPostInfo(post);
      });
    });
  }, []);

  if (!postInfo) return <div>No such post</div>;

  return (
    <div className='post-page'>
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), 'd MMM, yyyy HH:mm')}</time>
      <div className='author'>by @{postInfo.author.username}</div>
      <div className='image'>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt='' />
      </div>
      <div
        className='content'
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default SinglePost;

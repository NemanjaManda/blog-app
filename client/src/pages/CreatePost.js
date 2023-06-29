import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// React Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const navigate = useNavigate();

  const createNewPost = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    const response = await fetch('http://localhost:4000/create', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={createNewPost}>
      <input
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='summary'
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type='file' onChange={(e) => setFiles(e.target.files)} />
      <ReactQuill
        value={content}
        modules={modules}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className='create-button'>Publish</button>
    </form>
  );
};

export default CreatePost;

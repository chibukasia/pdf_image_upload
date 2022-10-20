import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ImageDisplay from './ImageDisplay';
import Form from './Form';

function App() {

  const [postImage, setPostImage] =useState(null) 

  return (
    <div className="App">
      <Form postImage={postImage} setPostImage={setPostImage}/>
      <ImageDisplay postImage={postImage} setPostImage={setPostImage}/>
    </div>
  );
}

export default App;

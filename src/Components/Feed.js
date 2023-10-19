import React, { useEffect, useState } from 'react'
import Story from './Story'
import MsgSenter from './MsgSenter'
import Post from './Post'
import db from '../firebase'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';


const Feed = () => {

const [posts, setPosts] = useState([])

/* useEffect(()=>{
  db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map(doc => 
      ({id:doc.id, 
       data:doc.data()
      })))
  })
},[]) */

useEffect(() => {
  const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setPosts(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    })));
  });

  return () => {
    // Unsubscribe from the snapshot listener when the component unmounts
    unsubscribe();
  };
}, []);

  return (
    <div className='d-flex flex-column align-items-center' style={window.innerWidth < 800 ? { width: '100%' } : {width:'50%', marginLeft:'25%',padding:'15px' }}>
      {window.innerWidth < 800 ? <MsgSenter /> : null}
      <Story />
      {window.innerWidth > 800 ? <MsgSenter /> : null}

{posts.map( post => {
   return <Post key={post.id}
   profilePic={post.data.profilePic}
   message={post.data.message}
   timestamp={post.data.timestamp}
   username={post.data.username}
   image={post.data.image}
   galleryImage={post.data.galleryImage} />
})}
    </div>
  )
}

export default Feed
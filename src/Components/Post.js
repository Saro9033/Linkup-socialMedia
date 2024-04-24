import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import RecommendIcon from '@mui/icons-material/Recommend';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


import {getDocs, collection, where, query } from 'firebase/firestore';

import {
    doc,
    updateDoc,
    increment,
    getDoc,
  } from 'firebase/firestore';
  import db, { auth } from '../firebase/Config';


const Post = ({ profilePic, image, username, timestamp, message, galleryImage, post ,Likes}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showModal, setShowModal] = useState(false); 
    const [likedByUsers, setLikedByUsers] = useState([]);

    const currentUserId = auth.currentUser.uid;

    const closeModal = () => {
        setShowModal(false);
    };
  
    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = new Date(timestamp?.toDate()).toLocaleString('en-US', options);
  
    const handleLike = async () => {
        setIsLiked(!isLiked)
        const postRef = doc(db, 'posts', post.id);
        try {
          await updateDoc(postRef, {
            Likes: !isLiked ? increment(1) : increment(-1),
          });
    
          console.log('Liked');
        } catch (error) {
          console.error('Error updating likes: ', error);
        }
      };
  
    useEffect(() => {
      // Check if the post is already liked by the current user
      const likesRef = doc(db, 'likes', post.id);
  
      getDoc(likesRef).then(likesSnapshot => {
        if (likesSnapshot.exists()) {
          const likedBy = likesSnapshot.data().likedBy;
          setIsLiked(likedBy.includes(currentUserId));
        }
      });
    }, [post.id, currentUserId]);
  

    const openModal = async (postId) => {
        // Define a Firestore query to get the likedBy user IDs
        const q = query(collection(db, 'likes'), where('postId', '==', postId));
      
        try {
          const querySnapshot = await getDocs(q);
      
          // Retrieve user IDs who liked the post
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data().userId);
          });
      
          // Use the user IDs to fetch user details from your users collection
          const usersWithDetails = await Promise.all(users.map(async (userId) => {
            const userDoc = await getDoc(doc(db, 'users', userId));
            return userDoc.data();
          }));
      
          setLikedByUsers(usersWithDetails);
          console.log(likedByUsers);
          setShowModal(true);
        } catch (error) {
          console.error('Error retrieving likes:', error);
        }
      };
      
    return (
        <div className='w-100 my-2 p-2 rounded-3 bg-light shadow'>
            <div className="d-flex align-items-start justify-content-between p-2" style={{ position: 'relative' }}>
                <div className="d-flex align-items-start">
                    {profilePic && <Avatar src={profilePic} className='mx-1' />}
                    <div className="post_topInfo">
                        <h3 style={{ fontSize: 'medium', margin: '0' }}> {username} </h3>
                        <p style={{ fontSize: 'small', margin: '0', color: 'gray' }}>
                            {formattedDate}      <PublicOutlinedIcon fontSize='verysmall' />

                        </p>
                    </div>
                </div>
                <button className='btn m-0 p-0'> <MoreHorizOutlinedIcon /></button>
            </div>

            <div className="post_bottom my-1 px-2 py-1">
                <p className='m-0'>{message}</p>
            </div>

            {image && <div className="post_image">
                <img className='w-100' src={image} alt="" />
            </div>}

            {galleryImage && <div className="post_image">
                <img className='w-100' src={galleryImage} alt="" />
            </div>}

            <div className='border-top mx-2 py-2'> 
                <button onClick={() => openModal(post.id)} style={{ border: 'none', color: 'gray', background: 'white' }}><span className='m-0'> <RecommendIcon style={{color:'orange'}} fontSize='small' /> {Likes} </span> </button> 
            </div>


            <div className="post_options mt-2 mx-2 border-top border-bottom py-1 d-flex align-items-center justify-content-around row "
                style={window.innerWidth < 450 ? { fontSize: '10px' } : null}>
                <button onClick={handleLike} style={{ border: 'none', color: 'gray', background: 'white' }} className="opt col text-center">

                    {isLiked ? <span style={{ color: '#FD5056' }}><ThumbUpIcon fontSize='small' /> Like </span> :
                        <span ><ThumbUpOutlinedIcon fontSize='small' /> Like </span>}

                </button>
                <div className="opt col text-center">
                    <ChatBubbleOutlineIcon fontSize='small' />
                    Comment
                </div>
                <div className="opt col text-center">
                    <ShortcutIcon fontSize='small' />
                    Share
                </div>

            </div>


{/* Modal */}

<div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-start">
              <button type="button" style={{ border: 'none' }} className="close " onClick={closeModal} data-dismiss="modal" aria-label="Close">
                <ArrowBackOutlinedIcon/>
              </button>
              <h6 className='text-center w-100  text-dark' >Likes</h6>
            </div>
            <div className="modal-body mod2B mx-1">

   {likedByUsers} 
          </div>
        </div>
      </div>

        </div>

        </div>
    )
}

export default Post
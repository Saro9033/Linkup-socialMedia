import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../Context/StateProvider';
import db, { storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const MsgSenter = () => {

    const [input, setInput] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [{ user }] = useStateValue();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [image, setImage] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          if (!image) {
            await addDoc(collection(db, 'posts'), {
              message: input,
              timestamp: new Date(), 
              profilePic: user.photoURL,
              username: user.displayName,
              image:imgUrl,
            });
          } else {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
    
            const imageUrl = await getDownloadURL(imageRef);
    
            await addDoc(collection(db, 'posts'), {
              message: input,
              timestamp: new Date(),
              profilePic: user.photoURL,
              username: user.displayName,
              galleryImage: imageUrl,
            });
          }

          closeModal()
          setInput('');
          setImgUrl('');
          setImage(null);
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
      };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const docRef = await addDoc(collection(db, 'posts'), {
    //             message: input,
    //             timestamp: serverTimestamp(),
    //             profilePic: user.photoURL,
    //             username: user.displayName,
    //             image: imgUrl
    //         });

    //         console.log('Document written with ID: ', docRef.id);

    //         setInput('');
    //         setImgUrl('');
    //     } catch (error) {
    //         console.error('Error adding document: ', error);
    //     }
    //     closeModal()
    // };


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const openModal2 = () => {
        setShowModal2(true);
        setShowModal(false)
    };

    const closeModal2 = () => {
        setShowModal2(false);
        setShowModal(true)

    };

    const handlePhotoSubmit = () =>{
        document.getElementById('photos').click()
    }

    const handleChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
        console.log(image.name);
    }
    return (<>

{/* Modal 1 */}
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header py-0">
                        <h5 className="modal-title w-100 text-center" style={{ color: 'black' }}>Create Post</h5>
                        <button type="button" style={{ border: 'none', fontSize: '2rem' }} className="close m-1" onClick={closeModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex align-items-center'> <Avatar src={user.photoURL} />
                            <div className='px-2'>
                                <h6 className='m-0 p-0'>{user.displayName}</h6>
                                <div className=' mt-1 rounded-2 p-1 d-flex justtify-content-between align-items-center' style={{ backgroundColor: 'rgb(228,230,235)' }}>
                                    <PeopleRoundedIcon fontSize='verysmall' />
                                    <h6 style={{ fontSize: '12px' }} className='px-1 py-0 m-0'>Friends</h6>
                                    <ExpandMoreIcon fontSize='verysmall' />
                                </div></div>
                        </div>
                        <form className='mt-3'>
                            <textarea rows="4" cols="50" style={{ width: '100%', border: 'none', outline: 'none', resize: 'none' }} value={input} onChange={(e) => setInput(e.target.value)} type="text" className='msg_input'
                                placeholder="Let your friends know what's on your mind...">

                            </textarea>
                             <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} type="text" className='my-2 form-control' placeholder="Image URL (optional)" style={{outline:'none'}}/> 
                        </form>

                        <div className='msg-iconfoot border d-flex justify-content-between align-items-center p-3 '>
                               {window.innerWidth > 800 ? 
                            <button onClick={openModal2} style={{border:'none', background:'none'}}>Add to your post</button>
                            : null
                        } 
                            <div>
                                <button onClick={handlePhotoSubmit} data-bs-toggle="tooltip" data-bs-placement="top" title="Photo/video">   <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" /> </button>
                                <button data-bs-toggle="tooltip" data-bs-placement="top" title="Tag people">    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" />  </button>
                                <button data-bs-toggle="tooltip" data-bs-placement="top" title="Feeling/activity">    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" />  </button>
                                <button data-bs-toggle="tooltip" data-bs-placement="top" title="check in">    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt="" />  </button>
                                <button data-bs-toggle="tooltip" data-bs-placement="top" title="more" onClick={openModal2}>    <MoreHorizOutlinedIcon /> </button>

                            </div>
                        </div>
                        {image !== '' &&
                         <p className='text-success m-0 mt-2 text-center'>Image is added successfully!</p>}
                    
                    </div>
                    <div className="modal-footer">
                        <button disabled={!input} type="button" className="btn btn-primary w-100" onClick={handleSubmit} data-dismiss="modal">
                            Post
                        </button>
                        {/* Add additional buttons or actions here */}
                    </div>
                </div>
            </div>
        </div>
{/* Modal 2 */}
<div className={`modal ${showModal2 ? 'd-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal2 ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-start">
              <button type="button" style={{ border: 'none' }} className="close " onClick={closeModal2} data-dismiss="modal" aria-label="Close">
                <ArrowBackOutlinedIcon/>
              </button>
              <h4 className='text-center w-100  text-dark' >Add to your post</h4>
            </div>
            <div className="modal-body mod2B mx-1">
              <div className='row my-2'>
              <button className='col-6 d-flex align-items-center py-2' onClick={handlePhotoSubmit}>   <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" /> <p className='px-2 m-0 py-0'>Photo/Video</p></button>
              <button className='col-6 d-flex align-items-center py-2'>    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" /> <p className='px-2 m-0 py-0'>Tag People</p> </button>
              </div>
              <input type="file" id="photos" style={{display:'none'}} onChange={handleChange}/>
              <div className='row my-2'>
              <button className='col-6 d-flex align-items-center  py-2'>   <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" /> <p className='px-2 m-0 py-0'>Feeling/Activity</p></button>
              <button className='col-6 d-flex align-items-center py-2'>    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt="" /> <p className='px-2 m-0 py-0'>Check in</p> </button>
              </div>
              <div className='row my-2'>
              <button className='col-6 d-flex align-items-center  py-2'>   <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png" alt="" /> <p className='px-2 m-0 py-0'>GIF</p></button>
              <button className='col-6 d-flex align-items-center py-2'>    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" /> <p className='px-2 m-0 py-0'>Live Video</p> </button>
              </div>
              <div className='row my-2'>
              <button className='col-6 d-flex align-items-center py-2'>   <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png" alt="" /> <p className='px-2 m-0 py-0'>Life event</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>


        {window.innerWidth > 800 ?
            <div className='msgSender d-none d-md-block'>
                <div className='msg_top'>
                    <Avatar src={user.photoURL} />
                    <form onClick={openModal} style={{ cursor: 'pointer' }}>
                        <input style={{ cursor: 'pointer' }} type="text" className='msg_input' placeholder={`What's on your mind ${user ? user.displayName : ''} ?`} />
                    </form>
                </div>

                <div className='msg_bot row mx-2'>
                    <div className="msg_option col">
                        <VideocamIcon style={{ color: 'red' }} />
                        <h6 style={{ paddingLeft: '5px' }}>Live Video</h6>
                    </div>
                    <div className="msg_option col">
                        <PhotoLibraryIcon onClick={openModal} style={{ color: 'green' }} />
                        <h6 style={{ paddingLeft: '5px' }}>Photo/Video</h6>
                    </div>
                    <div className="msg_option col">
                        <InsertEmoticonIcon style={{ color: 'orange' }} />
                        <h6 style={{ paddingLeft: '5px' }}>Feeling/Activity</h6>
                    </div>
                </div>
            </div> :
            <div className='bg-white mt-1 w-100' style={{ width: '100vw' }}>
                <div className='msg_top w-100'>
                    <Avatar src={user.photoURL} />
                    <form onClick={openModal} style={{ cursor: 'pointer' }} className='d-flex align-items-center'>
                        <input style={{ fontSize: '10px' }} value={input} onChange={(e) => setInput(e.target.value)} type="text" className='msg_input' placeholder={`What's on your mind? ${user ? user.displayName : ''}`} />
                        <button onClick={handleSubmit} type='submit'>Hidden buton</button>
                        <PhotoLibraryIcon onClick={openModal} style={{ color: 'black' }} />
                    </form>
                </div>
            </div >
        }
    </>
    )
}

export default MsgSenter
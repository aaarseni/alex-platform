import React, { useEffect, useState } from 'react';
import '../../App.css';
import ProductsVideo from '../ProductsVideo';
import VideoList from './VideoList';
import { useParams } from 'react-router-dom'
import courses from '../../lib/courses';
import chunk from 'lodash/chunk'
import CardItem from '../CardItem';
import '../VideosPage.css'
import FirebaseHelper from '../../lib/FirebaseHelper';
import Modal from '../Modal';

function CourseVideo() {
    const { id, chapterId, videoId } = useParams()
    const [showModal, setShowModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(undefined)


    console.log("id", id, chapterId)
    const data = courses.find(item => item.id == id)
    const chunkedChapters = chunk(data.chapters, 5)
    const chapter = data.chapters.find(item => item.id == chapterId)
    const video = chapter.videos.find(item => item.id == videoId)
    console.log('video', video, 'chapter', chapter)


    useEffect(() => {
        console.log(2)
        setTimeout(() => {
            const user = FirebaseHelper.getUser()
            console.log('user', user)
            if (!user) {
                setShowModal(true)
            }
        }, 500)

        FirebaseHelper.authChangedListener((user) => {
            setCurrentUser(user)
        })
    }, [])

    function handleSignIn() {
        FirebaseHelper.signUp()
            .then(user => {
                window.location.reload()
            })
    }

    return (
        <>
            <h2>{video.title}</h2>
            {
                showModal
                && <Modal>
                    <div className="modal-container">
                        <h2>Please sign in to continue</h2>
                        <button className="modal-button" onClick={handleSignIn}>Sign in</button>
                    </div>
                </Modal>
            }

            <div className="video-page-wrapper">
                <div className="video-wrapper">
                    <div className="video-player">
                        <video width="320" height="240" controls poster={video.image}>
                            {
                                currentUser
                                && <source src={video.videoUrl} type="video/mp4" ></source>
                            }
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-list">
                        <ul className="video-list-items">
                            {
                                chapter.videos.map(video => {
                                    return (
                                        <li key={`videolist-${video.id}`} className={`video-list-item ${video.id == videoId ? 'active' : ''}`}>
                                            <p>{video.title}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="chapter-list">
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            {
                                chunkedChapters.map(chunk => {
                                    return (
                                        <ul className='cards__items'>
                                            {
                                                chunk.map(chapter => {
                                                    return (
                                                        <CardItem
                                                            key={`chapter-list-${chapter.id}`}
                                                            isActive={chapter.id == chapterId}
                                                            src={chapter.image}
                                                            text={chapter.title}
                                                            label={chapter.label}
                                                            path={`/course/${id}/chapter/${chapter.id}`}
                                                        />
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>





            <div className='cards__container'>
                <div className='cards__wrapper'>

                    {/* {
                        chunkedVideos.map(chunk => {
                            return (
                                <ul className='cards__items'>
                                    {
                                        chunk.map(video => {
                                            return (
                                                <CardItem
                                                    src={video.image}
                                                    text={video.title}
                                                    label={video.label}
                                                    path={video.url}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    } */}


                </div>
            </div>
            {/* <ProductsVideo /> */}
            {/* <VideoList /> */}
        </>
    );
}

export default CourseVideo;
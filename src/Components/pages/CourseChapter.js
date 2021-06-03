import React from 'react';
import '../../App.css';
import ProductsVideo from '../ProductsVideo';
import VideoList from './VideoList';
import { useParams } from 'react-router-dom'
import courses from '../../lib/courses';
import chunk from 'lodash/chunk'
import CardItem from '../CardItem';

function CourseChapter() {
    const { id, chapterId } = useParams()
    console.log("id", id, chapterId)
    const data = courses.find(item => item.id == id)
    const chapter = data.chapters.find(item => item.id == chapterId)
    const chunkedVideos = chunk(chapter.videos, 5)
    console.log(data, chapter)

    return (
        <>
            <h2>{chapter.title}</h2>
            <div><img style={{width: '100%'}} src={chapter.image} /></div>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    {
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
                                                    path={`/course/${id}/chapter/${chapterId}/video/${video.id}`}
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
            {/* <ProductsVideo /> */}
            {/* <VideoList /> */}
        </>
    );
}

export default CourseChapter;
import React from 'react';
import '../../App.css';
import ProductsVideo from '../ProductsVideo';
import VideoList from './VideoList';
import { useParams } from 'react-router-dom'
import courses from '../../lib/courses';
import chunk from 'lodash/chunk'
import CardItem from '../CardItem';

function Course() {
    const { id } = useParams()
    console.log("id", id)
    const data = courses.find(item => item.id == id)
    const chunkedChapters = chunk(data.chapters, 5)
    console.log(data, chunkedChapters)

    return (
        <>
            <h2>{data.title}</h2>
            <div><img style={{width: '100%'}} src={data.image} /></div>
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
            {/* <ProductsVideo /> */}
            {/* <VideoList /> */}
        </>
    );
}

export default Course;
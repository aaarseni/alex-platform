import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import courses from '../lib/courses'

function Cards() {
    console.log('ccc', courses)

    const firstTwoCourse = courses.slice(0,2);
    const restofCourses = courses.slice(2);

    console.log(firstTwoCourse, restofCourses)

  return (
    <div className='cards'>
      <h1>Lessons</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
              {
                  firstTwoCourse.map(item => {
                      return <CardItem
                      src={item.image}
                      text={item.title}
                      label={item.label}
                      path={`/course/${item.id}`}
                    />
                  })
              }
              </ul>
              <ul className='cards__items'>
              {
                  restofCourses.map(item => {
                      return <CardItem
                      src={item.image}
                      text={item.title}
                      label={item.label}
                      path={`/course/${item.id}`}
                    />
                  })
              }
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
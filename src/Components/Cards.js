import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lessons</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/python.jpg'
              text='AWS Certified Solutions Architect Associate'
              label='AWS'
              path='/products'
            />

            {/* <CardItem
              src='images/python.jpg'
              text='AWS Certified Solutions Architect Associate'
              label='AWS'
              path='/products'
            />
            <CardItem
              src='images/c++.jpg'
              text='C++'
              label='Back-end'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/html.jpg'
              text='HTML - page structure'
              label='Front-end'
              path='/products'
            />
            <CardItem
              src='images/css.jpg'
              text='CSS - styling for the web pages'
              label='Front-end'
              path='/products'
            />
            <CardItem
              src='images/js.jpg'
              text='JS - behavior of the web pages'
              label='Front-end'
              path='/products'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';

import 'Body.css';

const Body = ({ cardDetails }) => {
  return (
    <>
      <div className='row mb-2 pt-3'>
        {cardDetails &&
          cardDetails.map((data) => {
            const { section, title, date, topic, img } = data;
            return (
              <div className='col-md-6'>
                <div className='card mb-3'>
                  <div className='row no-gutters'>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <strong className='d-inline-block mb-2 text-primary'>
                          {section}
                        </strong>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{topic}</p>
                        <p className='card-text'>
                          <small className='text-muted'>{date}</small>
                        </p>
                        <span className='link-text'>Continue Reading</span>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <img
                        src={img}
                        alt='post_image'
                        width='100%'
                        height='100%'
                        className='img-rotate'
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Body;

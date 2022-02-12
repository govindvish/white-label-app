import React from 'react';

import Body from '../../component/Body';
import img1 from 'img1.svg';
import img2 from 'img2.svg';
import img3 from 'img3.svg';
import img4 from 'img4.svg';

const BodyWrapper = () => {
  const cardDetails = [
    {
      section: 'World',
      title: 'Post 1',
      date: 'Feb 11',
      topic:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aliquam quia omnis repellat necessitatibus totam vero odio at nostrum reiciendis.',
      img: img1,
    },
    {
      section: 'India',
      title: 'Post 2',
      date: 'Feb 2',
      topic:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aliquam quia omnis repellat necessitatibus totam vero odio at nostrum reiciendis.',
      img: img2,
    },
    {
      section: 'Science',
      title: 'Post 3',
      date: 'Feb 12',
      topic:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aliquam quia omnis repellat necessitatibus totam vero odio at nostrum reiciendis.',
      img: img3,
    },
    {
      section: 'Politics',
      title: 'Post 4',
      date: 'Feb 9',
      topic:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aliquam quia omnis repellat necessitatibus totam vero odio at nostrum reiciendis.',
      img: img4,
    },
  ];

  return (
    <>
      <Body cardDetails={cardDetails} />
    </>
  );
};

export default BodyWrapper;

import React from 'react';
import Thing from './Thing';

export default function App() {
  return(
    <div>
      <h1>Here is a Thing for you!</h1>
      <Thing title={'This is the awesome title'} message={'This message will change your life'} />
      <Thing title={'This is the more awesomer title'} message={'This message will change your life back to what it was'} />
    </div>
  );
}
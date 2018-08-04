import React from 'react';
import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ( { giphys } ) => (
  <ul>
  {giphys.map((el,idx) => <li key={idx}>
    <GiphysIndexItem giphy={el} />
  </li>)}
  </ul>
);

export default GiphysIndex;

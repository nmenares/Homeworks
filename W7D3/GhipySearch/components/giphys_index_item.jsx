import React from 'react'

const GiphysIndexItem = ( {giphy} ) => (
  <img src={giphy.images.fixed_height.url}/>
);

export default GiphysIndexItem

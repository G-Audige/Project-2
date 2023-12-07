import React from 'react';
import { Link } from 'react-router-dom';

function SearchDisplay(props) {
  const loaded = () => {
    const items = props.searchterm.items;
    if (typeof items == 'undefined') {
      loading();
    } else {
      console.log('Loaded: ', items[0].volumeInfo.title);
      console.log('Loaded: ', items[0]);
      return (
        <div className='catalogue'>
          {items.map((item) => {
            console.log(item);
            let image;
            if (typeof item.volumeInfo.imageLinks == 'undefined') {
              image = 'NoImage.png';
            } else {
              image = item.volumeInfo.imageLinks.thumbnail;
            }
            return (
              <div className='book' key={item.id}>
                <Link to={`/Books/${item.volumeInfo.title}`}>
                  <img
                    src={image}
                    alt={item.volumeInfo.title}
                    className='image'
                  />
                  <p>{item.volumeInfo.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };
  const loading = () => {
    console.log('Loading: ', props);
    // console.log('Prop: ', props.items[0].volumeInfo.title);
    return (
      <div className='catalogue'>
        <h1>Loading...</h1>
      </div>
    );
  };
  return typeof props.searchterm == 'undefined' ? loading() : loaded();
}

export default SearchDisplay;

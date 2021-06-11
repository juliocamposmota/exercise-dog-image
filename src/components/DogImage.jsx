import React, { Component } from 'react';

class DogImage extends Component {
  render() {
    const { dogImage } = this.props;
    const dogBreed = dogImage.split('/')[4];

    return (
      <div>
        <img src={ dogImage } alt="a cute dog" style={ { width:'350px' } } />
        <p>{ dogBreed }</p>
      </div>
    );
  }
}

export default DogImage;

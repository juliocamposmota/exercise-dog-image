import React, { Component } from 'react';

class DogImage extends Component {
  render() {
    const { dogImage } = this.props;

    return (
      <div>
        <img src={ dogImage } alt="a cute dog" style={ { width:'350px' } } />
      </div>
    );
  }
}

export default DogImage;

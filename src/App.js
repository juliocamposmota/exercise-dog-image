import React, { Component } from 'react';
import DogImage from './components/DogImage';
import Loading from './components/Loading';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      dogImage: '',
    }

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, { dogImage }) {
    const forbidenDog = 'terrier';
    return !dogImage.includes(forbidenDog);
  }

  componentDidUpdate() {
    const { dogImage } = this.state;
    localStorage.setItem('dogUrl', dogImage);
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'aplication/json' } }
        const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random', requestHeaders);
        const requestObject = await requestReturn.json();
        const result = await requestObject.message;

        this.setState({
          loading: false,
          dogImage: result,
        });
      }
    );
  }

  render() {
    const { loading, dogImage } = this.state;

    return (
      <div>
        { loading ? <Loading /> : <DogImage dogImage={dogImage} /> }

        <button type="button" onClick={ this.fetchDog }>Outro doguinho</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button,Image,Grid } from 'semantic-ui-react';
import api from '../api';

class MovieDetails extends Component {
  state = {
    movie: {},
    isLoading: false,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ isLoading: true });

    const response = await api.getMovieById(id);
    this.setState({
      movie: response.data.data,
      isLoading: false,
    });
  }

  render() {
    const { movie, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ margin: '20px', padding:'10px' }}>
        <h2 style={{ textAlign: 'left' }}>{movie.name}</h2>
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop:'10px' }}>
          <Image src={movie.image} style={{ height: "700px",width:"cover" ,objectFit: "cover" }} />
          <div style={{marginLeft:'30px'}}>
            <iframe
              width="1200"
              height="705"
              src={movie.youtube}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
          </div>
        </div>
        <div style={{marginTop:'20px'}}>
            <h5>{movie.description}</h5>
          </div>
      </div>
    );
  }
}

export default MovieDetails;
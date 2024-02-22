import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image,Grid,Button} from 'semantic-ui-react';
import api from '../api';

class MoviesList extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await api.getAllMovies();
    this.setState({
      movies: response.data.data,
      isLoading: false,
    });
  }

renderItems = () => {
  return (
    <Card.Group className="card-group">
      {this.state.movies.map((movie) => (
        <Card class="black card" style={{ width: "400px", height: "600px", padding: "1rem", border:0 , color:"#000"}}>
          <Card.Content>
            <Card.Header>{movie.name}</Card.Header>
            <Image src={movie.image} style={{ height: "400px", objectFit: "cover" }} />
            <Card.Meta>{movie.type}</Card.Meta>
            <Card.Description>{movie.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Link to={`/movies/detail/${movie._id}`}>
                <Button fluid primary>
                  Detail
                </Button>
              </Link>
            </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Grid.Row style={{ margin: "0 -1rem", padding: "20px" }}>
        {this.renderItems()}
      </Grid.Row>
    );
  }
}

export default MoviesList;
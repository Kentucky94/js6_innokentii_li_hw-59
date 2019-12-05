import React, {Component} from 'react';
import nanoid from 'nanoid';

import AddMovieForm from "./Components/AddMovieForm/AddMovieForm";
import MovieTab from "./Components/Movie/MovieTab";
import './App.css';

class App extends Component {
  state = {
    text: '',
    movies: [],
  };

  changeText = (event) => {
    const text = event.target.value;

    this.setState({text: text})
  };

  addMovie = () => {
    const movies = [...this.state.movies];
    const newTask = {text: this.state.text, id: nanoid()};

    movies.push(newTask);

    this.setState({movies});
  };

  deleteMovie = (id) => {
    const movies = [...this.state.movies];
    const movieIndex = movies.findIndex(task => task.id === id);

    movies.splice(movieIndex, 1);

    this.setState({movies});
  };

  editText = (event, id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex(movie => movie.id === id);
    const movie = {...movies[index]};

    movie.text = event.target.value;

    movies[index] = movie;

    this.setState({movies})
  };

  render() {
    const movies = this.state.movies.map(movie => (<MovieTab
      key={movie.id}
      text={movie.text}
      delete={() => this.deleteMovie(movie.id)}
      editText={(event) => this.editText(event, movie.id)}
    />));

    return (
      <div className='App'>
        <div className="MovieApp">
          < AddMovieForm onChange={this.changeText} add={this.addMovie}/>
          <div>
            {movies}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

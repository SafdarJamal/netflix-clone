import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

import movies from '../../data/movies.json';

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies({ movies });
  }

  render() {
    const { children, movies, match } = this.props;

    return (
      <div className={styles.movies}>
        <div className={match.params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index}`}>
              <div
                className={styles.movie}
                style={{ backgroundImage: `url(${movie.cover})` }}
              />
            </Link>
          ))}
        </div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies.all };
};

export default connect(mapStateToProps, { fetchMovies })(Movies);

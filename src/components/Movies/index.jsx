import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import { Link } from 'react-router-dom';
import styles from './style.css';

class Movies extends Component {
  render() {
    const { children, movies = [], params = {} } = this.props;
    console.log(this.props);

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index + 1}`}>
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

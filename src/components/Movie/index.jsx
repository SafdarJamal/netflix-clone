import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie({ index: this.props.match.params.id });
  }

  shouldComponentUpdate(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchMovie({ index: newProps.match.params.id });
    }

    return true;
  }

  render() {
    const { movie } = this.props;

    return (
      <div
        className={styles.movie}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%,➥ rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`
        }}
      >
        <div
          className={styles.cover}
          style={{ backgroundImage: `url(${movie.cover})` }}
        ></div>
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div key={index} className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>

        <Link className={styles.closeButton} to="/movies">
          X
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movie: state.movies.current };
};

export default connect(mapStateToProps, { fetchMovie })(Movie);

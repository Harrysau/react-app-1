import React, { Component } from "react";
import Like from "./Like";

class Movies extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.company}</td>
                <td>{movie.genre_id}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLiked={() => this.props.onLiked(movie)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div />
      </div>
    );
  }
}

export default Movies;

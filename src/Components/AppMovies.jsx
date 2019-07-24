import React, { Component } from "react";
import Movies from "./Movies";
import Paginator from "./Paginator";
import GenreList from "./GenreList";
import { paginate } from "../utils/paginate";

class AppMovies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1
  };
  componentDidMount() {
    this.setState({
      movies: [
        {
          id: 1,
          genre_id: 1,
          title: "Avengers",
          company: "Marvel",
          liked: true
        },
        { id: 2, genre_id: 2, title: "Avatar", company: "Sony", liked: false },
        { id: 3, genre_id: 3, title: "X-Men", company: "Fox", liked: true },
        {
          id: 4,
          genre_id: 4,
          title: "Spider-Man",
          company: "Sony",
          liked: true
        },
        {
          id: 5,
          genre_id: 5,
          title: "Deadpool",
          company: "Marvel",
          liked: true
        },
        {
          id: 6,
          genre_id: 3,
          title: "Dark Phoenix",
          company: "Sony",
          liked: false
        },
        { id: 7, genre_id: 4, title: "Dumbo", company: "Fox", liked: true },
        { id: 8, genre_id: 2, title: "Jumanji", company: "Sony", liked: true },
        {
          id: 9,
          genre_id: 1,
          title: "Avengers Ultron",
          company: "Marvel",
          liked: true
        },
        {
          id: 10,
          genre_id: 5,
          title: "Black Widow",
          company: "Sony",
          liked: false
        },
        {
          id: 11,
          genre_id: 1,
          title: "Far From Home",
          company: "Sony",
          liked: false
        },
        {
          id: 12,
          genre_id: 2,
          title: "Empire Strike Back",
          company: "Fox",
          liked: true
        },
        {
          id: 13,
          genre_id: 4,
          title: "Jumanji 2",
          company: "Sony",
          liked: true
        },
        {
          id: 14,
          genre_id: 3,
          title: "The Dark world",
          company: "Marvel",
          liked: true
        },
        {
          id: 15,
          genre_id: 5,
          title: "Captain America",
          company: "Sony",
          liked: false
        }
      ],
      genres: [
        { id: 1, name: "Thriler" },
        { id: 2, name: "Action" },
        { id: 3, name: "Adventure" },
        { id: 4, name: "Comedy" },
        { id: 5, name: "Romance" }
      ]
    });
  }
  render() {
    let pMovies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3">
              <GenreList
                items={this.state.genres}
                onItemSelect={this.handleItemSelect}
                selectedItem={this.state.selectedItem}
              />
            </div>
            <div className="col">
              <Movies
                movies={pMovies}
                onLiked={this.handleLiked}
                count={this.state.movies.length}
              />
              <Paginator
                itemsCount={this.state.movies.length}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  handleLiked = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = movie;
    console.log(movies[index].liked);
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log(this.state.currentPage);
  };
  handleItemSelect = genre => {
    this.setState({ selectedItem: genre });
    //console.log(genre);
  };
}

export default AppMovies;

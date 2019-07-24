import React, { Component } from "react";

class GenreList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.items.map(genre => (
            <li
              key={genre.id}
              onClick={() => this.props.onItemSelect(genre)}
              className={
                this.props.selectedItem === genre
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GenreList;

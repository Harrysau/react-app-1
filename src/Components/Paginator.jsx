import React, { Component } from "react";
import _ from "lodash";

class Paginator extends Component {
  render() {
    const { itemsCount, pageSize, currentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <React.Fragment>
        <nav>
          <ul className="pagination">
            {pages.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <span
                  className="page-link"
                  onClick={() => this.props.onPageChange(page)}
                >
                  {page}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Paginator;

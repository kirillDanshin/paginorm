# paginorm

**A ReactJS [dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) component to render a pagination.**

A fork of Sergey Vayser's component named [react-js-pagination](github.com/vayser/react-js-pagination).

The component comes with no built-in styles. HTML layout compatible with [Bootstrap](http://getbootstrap.com/components/#pagination) pagination stylesheets.

## Installation

Install `paginorm` with [npm](https://www.npmjs.com/):

```
$ npm install paginorm
```

## Usage

Very easy to use. Just provide props with total amount of things that you want to display on the page.

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "../components/Pagination";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 15
    };
    this.handlePageChange = ::this._handlePageChange;
  }

  _handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

```

![Example](https://i.gyazo.com/9af4c2b9e20aa95a67597d3ca64efde3.png)

## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`totalItemsCount` | Number | | Total count of items which you are going to display
`onChange` | Function | | Page change handler. Receive pageNumber as arg
`acivePage` | Number | `1` | Active page
`itemsCountPerPage` | Number | `10` | Count of items per  page
`pageRangeDisplayed` | Number | `5` | Range of pages in paginator, exclude navigation blocks (prev, next, first, last pages)
`firstPageText` | String / ReactElement | `«` | Text of first page navigation button or whole element
`lastPageText` | String / ReactElement | `»` | Text of last page navigation button or whole element
`prevPageText` | String / ReactElement | `⟨` | Text of prev page navigation button or whole element
`nextPageText` | String / ReactElement | `⟩` | Text of next page navigation button or whole element
`className` | String | "pagination" | ClassName for the pagination `ul`
`firstPageClassName` | String | | ClassName for the first page link
`lastPageClassName` | String | | ClassName for the last page link
`prevPageClassName` | String | | ClassName for the previous page link
`nextPageClassName` | String | | ClassName for the next page link
`allItemsClassName` | String | | ClassName for the all pagination links
`activeClassName` | String | | ClassName for the active page

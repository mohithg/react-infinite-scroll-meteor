# react-infinite-scroll-meteor  [![Build Status](https://travis-ci.org/mohithg/react-infinite-scroll-meteor.svg?branch=master)](https://travis-ci.org/mohithg/react-infinite-scroll-meteor) [![npm version](https://badge.fury.io/js/react-infinite-scroll-meteor.svg)](https://badge.fury.io/js/react-infinite-scroll-meteor)


## Installation

```
npm install react-infinite-scroll-meteor --save
```

## Properties

### container
The class name of the container for which the scroll event listener is to be given.
Default: window

### endPadding
The padding at which the loadMore method is to be called
Default: 100

### loadMore
Function that is called when scrolled after the endPadding is reached

## Example

```
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-meteor';

class ComponentWithInfiniteScroll extends React.Component {

  getMore() {
    // Call the Meteor subscription method
    // to load next set of data
  }

  render() {
    return(
      <Infinite
        container="container"
        endPadding={100}
        loadMore={this.getMore}
      >
        <div className="container">
          // some list of children
          </div>
      </Infinite>
      );
  }
}

export default ComponentWithInfiniteScroll;

```

## License

MIT

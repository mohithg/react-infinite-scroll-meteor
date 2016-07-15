import React from 'react';

/**
 * Renders infinite scroll component
 */
class InfiniteScroll extends React.Component {

  /**
   * constructor
   */
  constructor(props) {
    super(props);

    /**
     * Binding this to the methods
     */
    this.handleScrollEnd = this.handleScrollEnd.bind(this);
  }

  /**
   * Adding the event listener when container is in DOM
   */
  componentDidMount() {
    this.container = this.props.container ? document.getElementsByClassName(this.props.container)[0]
                      : window;
    this.container.addEventListener('scroll', this.handleScrollEnd);
  }

  /**
   * computing the top position
   */
  topPosition(el) {
    return el ? el.offsetTop + this.topPosition(el.offsetParent) : 0;
  }

  /**
   * Checks if scrolled to bottom of container
   */
  handleScrollEnd(e) {
    const el = e.target;
    if (this.container === window) {
      const target = el.scrollingElement;
      const targetScroll = (target.scrollHeight - (target.clientHeight + target.scrollTop));
      if (targetScroll < this.props.endPadding) {
        this.props.loadMore(true); // Tell parent to do subscription
      }
    } else {
      const scrollTop = (window.pageYOffset) ? window.pageYOffset :
                        el.scrollTop ||
                        (document.documentElement ||
                         document.body.parentNode ||
                         document.body).scrollTop;
      const targetScroll = this.topPosition(el) + el.offsetHeight + scrollTop - window.innerHeight;
      if (targetScroll > Number(this.props.endPadding)) {
        this.props.loadMore(true); // Tell parent to do subscription
      }
    }
  }

  /**
   * render the children
   */
  render() {
    return (
      <span>
        {this.props.children}
      </span>
    );
  }
}

InfiniteScroll.propTypes = {
  endPadding: React.PropTypes.number,
  children: React.PropTypes.node,
  container: React.PropTypes.string,
  loadMore: React.PropTypes.func,
};

InfiniteScroll.defaultProps = {
  endPadding: 100,
  children: <div> </div>,
  loadMore: () => {},
};

/**
 * export the component
 */
export default InfiniteScroll;

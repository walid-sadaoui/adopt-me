import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  // take a set of props returns a set of states
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = (event) => {
    // what is this? on veut que ca soit un Carousel Component, comment faire
    // 1. dans constructor : this.handleIndex = this.handeIndex.bind(this)
    // ou 2. transform into arrow function
    // arrow funct don't create new context, so this is still the component, sinon this is whatever is invoked
    // when passing elements to child or eventlistener do arrow function
    this({
      active: +event.target.dataset.index, // + transform string into number
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

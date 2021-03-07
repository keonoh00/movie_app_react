import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const { location, history } = this.props;
        // if user unexpectedly refreshed page without clicking the movie it redirects to home
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state !== undefined) {
            return (
                <section className="movie__detail__container">
                    <div className="movie__detail">
                        <div className="movie__detail__maininfo">
                            <img src={location.state.poster} alt={location.state.title} title={location.state.title} className="movie__detail__poster" ALIGN="left" />
                            <h3 className="movie__detail__title">{location.state.title}</h3>
                            <p className="movie__detail__year">{location.state.year}</p>
                            <div className="movie__detail__genreContainer">
                                {location.state.genres.map(genre => 
                                    <div className="movie__detail__genre">{genre}</div>
                                )}
                            </div>
                        </div>
                        <p className="movie__detail__summary">{location.state.summary}</p>
                    </div>
                </section>
            )
        } else {
            return null
        }
    }
}

export default Detail;
import React, { Component, Fragment} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {loadAllFilms} from "../../store/actions";

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a4991e824c745145bbc879e10d093e94&language=en-US').then(response => {
            this.setState({ films: response.data['results']});
            console.log(this.props);
            this.props.getFilms(response.data['results']);
        })
    }

    render() {
        return (
            <Fragment>
                <ul>
                    {this.state.films.map((film, idx) => <li key={idx}>{film.title}</li>)}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    films: state.films
});

const mapDispatchToProps = dispatch => ({
    getFilms: () => dispatch(loadAllFilms())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog)
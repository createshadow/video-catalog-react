import React, { Component, Fragment} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {loadAllFilms} from "../../store/actions";
import GridList from "@material-ui/core/GridList/GridList";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";

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
            this.props.getFilms(response.data['results']);
        })
    }

    render() {
        return (
            <Fragment>
                <GridList cols={this.state.films.length} style={{position: 'relative', top: '100px', justifyContent: 'space-around'}}>
                    {this.state.films.map((film, idx) => (
                        <Card key={idx} style={{width: '30%', margin: '15px'}}>
                            <CardMedia image={film['backdrop_path']} component="img"/>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {film.title}
                                </Typography>
                                <Typography component="p">
                                    {film.overview}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </GridList>
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

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog)
import React, { Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Catalog from "../catalog/Catalog";

export default class Home extends Component{

    render() {
        return (
            <Fragment>
                <Link to='/catalog' component={ Catalog }>Go to catalog!</Link>
            </Fragment>
        )
    };
};
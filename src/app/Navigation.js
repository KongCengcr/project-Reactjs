import React, { Component } from 'react';

import img from "../../public/img/dev-1.jpg";
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={img} width="30" height="30" className="d-inline-block align-top"
                        alt="" />
                    Data Personals
                </a>
            </nav>
        );
    }
}

export default Navigation;
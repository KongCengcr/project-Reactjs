import React, { Component } from 'react';

import Form from './Form'

import { personals } from '../personals.json';

class Panel extends Component {
    constructor() {
        super();
        this.state = { personals };
        //uso un bind para que la funcion lea el state
        this.addPersonals = this.addPersonals.bind(this);
    }
    //funcion para agregar el personal, en donde leo los datos mediante el props del form
    addPersonals(personal) {
        this.setState({
            personals: [...this.state.personals, personal]
        })
    }
    //quito un personal con filter ya que leera los array del state.personal y dejara todos los distinto del parametro que le pase
    removePersonals(id) {
        this.setState({
            personals: this.state.personals.filter((e, i) => {
                return i !== id
            })
        })
    }
    render() {
        return (
            <div className="panel-personals">
                <div className="row w-100">
                    <div className="col-md-4">
                        <div className="container">
                            <Form addPersonal={this.addPersonals}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Sector</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.personals.map((personal, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row">{i}</th>
                                                        <td>{personal.name + ' ' + personal.lastname}</td>
                                                        <td>{personal.email}</td>
                                                        <td>{personal.country}</td>
                                                        <td>{personal.address}</td>
                                                        <td>{personal.sector}</td>
                                                        <td><button type="button" onClick={this.removePersonals.bind(this, i)} className="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
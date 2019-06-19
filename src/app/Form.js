import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            lastname: "",
            email: "",
            country: "",
            address: "",
            sector: ""
        }
        //les hago un bind para poder leer el estado y pasarlo a las funciones
        //sin esto no me ejecuta las funciones
        this.setInput = this.setInput.bind(this);
        this.capSubmit = this.capSubmit.bind(this);

    }

    setInput(e){
        //uso un spree para leer y colocar los datos mas facil en el state donde e.target me devuelte el value y el name
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    //Evito que recargue la pagina y envio los datos
    capSubmit(e){
        e.preventDefault();
        this.props.addPersonal(this.state);
    }

    render(){
        return (
            <div className="bg-mozts">
                <form className="form-complete" onSubmit={this.capSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="name" className="color-mozts">Name</label>
                                <input type="text" onChange={this.setInput} name="name" className="form-control input-mozts" id="name" placeholder="Enter Name" ></input>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                            else.</small>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="lastName" className="color-mozts">Last Name</label>
                                <input type="text" name="lastname" onChange={this.setInput} className="form-control input-mozts" id="lastName"
                                    placeholder="Enter Last Name"></input>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="email" className="color-mozts">Email address</label>
                                <input type="email" name="email" onChange={this.setInput} className="form-control input-mozts" id="email" aria-describedby="emailHelp"
                                    placeholder="Enter email"></input>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="country" className="color-mozts">Contry</label>
                                <select className="form-control input-mozts" name="country" onChange={this.setInput} id="country">
                                    <option>Argentina</option>
                                    <option>Canada</option>
                                    <option>Panamá</option>
                                    <option>U.S.A</option>
                                    <option>Venezuela</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="address" className="color-mozts">Address</label>
                                <input type="text" name="address" onChange={this.setInput} className="form-control input-mozts" id="pass" placeholder="Enter Address"></input>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <label htmlFor="sector" className="color-mozts">Sector</label>
                                <select className="form-control input-mozts" name="sector" onChange={this.setInput} id="sector">
                                    <option>Software Developer</option>
                                    <option>Web Developer</option>
                                    <option>Marketing</option>
                                    <option>Design</option>
                                    <option>Other...</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
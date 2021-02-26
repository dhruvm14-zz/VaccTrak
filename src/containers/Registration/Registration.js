import React, { Component, useState } from "react";
import "./Registration.css";
import firebase, { db } from "../../firebase";

export default class Hospital extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      address: "",
      contact: "",
      hospital: "",
      vaccine: "",
      appointment: "",
      mail: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      contact: this.state.contact,
      hospital: "",
      mail: this.state.mail,
    };
    db.collection("users").add(user);
    this.setState({
      name: "",
      age: "",
      address: "",
      contact: "",
      hospital: "",
      vaccine: "",
      appointment: "",
      mail: "",
    });
  }

  render() {
    return (
      <div className="Hospital">
        <section className="">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            className="hospital__form"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
              value={this.state.age}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              onChange={this.handleChange}
              value={this.state.contact}
            />
            <input
              type="text"
              name="mail"
              placeholder="E Mail"
              onChange={this.handleChange}
              value={this.state.mail}
            />
            {/* <input
              type="date"
              name="appointment"
              placeholder="Appointment"
              onChange={this.handleChange}
              value={this.state.appointment}
            /> */}

            <button>Next</button>
          </form>
        </section>
      </div>
    );
  }
}

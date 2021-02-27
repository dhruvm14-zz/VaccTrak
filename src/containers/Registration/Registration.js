import React, { Component, useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

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
            <div class="personalrecords">
              <h1>Personal Details</h1>
              <label for="name">First Name</label>
              <input
                type="text"
                name="fname"
                // placeholder="name"
                id="fname"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label for="gender">Gender</label>
              <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                //placeholder="dob"
                onChange={this.handleChange}
                value={this.state.appointment}
              />
              {/* <label for="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              //placeholder="Age"
              onChange={this.handleChange}
              value={this.state.age}
            /> */}
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                // placeholder="Address"
                onChange={this.handleChange}
                value={this.state.address}
              />
              <label for="mail">Email Id </label>
              <input
                type="email"
                name="mail"
                id="mail"
                //placeholder="E Mail"
                onChange={this.handleChange}
                value={this.state.mail}
              />
              <label for="pass">Password</label>
              <input
                type="password"
                name="pass"
                id="pass"
                //placeholder="E Mail"
                onChange={this.handleChange}
                value={this.state.mail}
              />
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={this.handleChange}
                value={this.state.address}
              />
              <label for="state">State</label>
              <select name="state" id="state" class="form-control">
                <option value="Delhi">Delhi</option>
              </select>
              <label for="city">City</label>
              <select name="state" id="city" class="form-control">
                <option value="New Delhi">New Delhi</option>
              </select>
            </div>
            <div class="Medical Records">
              <h1>Medical Records</h1>
              <label for="testrecord">Upload COVID-19 Test Report:</label>
              <input type="file" id="testrecord" name="testrecord" />
              <label for="name">First Name</label>
              <input
                type="text"
                name="fname"
                // placeholder="name"
                id="fname"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <label for="gender">Gender</label>
              <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                //placeholder="dob"
                onChange={this.handleChange}
                value={this.state.appointment}
              />
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                // placeholder="Address"
                onChange={this.handleChange}
                value={this.state.address}
              />
              <label for="mail">Email Id </label>
              <input
                type="email"
                name="mail"
                id="mail"
                //placeholder="E Mail"
                onChange={this.handleChange}
                value={this.state.mail}
              />
              <label for="pass">Password</label>
              <input
                type="password"
                name="pass"
                id="pass"
                //placeholder="E Mail"
                onChange={this.handleChange}
                value={this.state.mail}
              />
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={this.handleChange}
                value={this.state.address}
              />
            </div>
            <Link to="/appointment">
              <button>NEXT</button>
            </Link>
          </form>
        </section>
      </div>
    );
  }
}

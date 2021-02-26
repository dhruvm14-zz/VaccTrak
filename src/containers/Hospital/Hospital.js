import React, { Component, componentDidMount } from "react";
import "./Hospital.css";
import firebase, { db } from "../../firebase";

export default class Hospital extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      address: "",
      contact: "",
      latitude: "",
      longitude: "",
      covaxin: "",
      covishield: "",
      sputinik: "",
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
    const hospital = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      contact: this.state.contact,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      covaxin: this.state.covaxin,
      covishield: this.state.covishield,
      sputinik: this.state.sputinik,
    };
    console.log(hospital);
    db.collection("hospitals").add(hospital);
    this.setState({
      name: "",
      address: "",
      contact: "",
      latitude: "",
      longitude: "",
      covaxin: "",
      covishield: "",
      sputinik: "",
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
              name="id"
              placeholder="ID"
              onChange={this.handleChange}
              value={this.state.id}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.name}
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
              name="latitude"
              placeholder="Latitude"
              onChange={this.handleChange}
              value={this.state.latitude}
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              onChange={this.handleChange}
              value={this.state.longitude}
            />
            <input
              type="text"
              name="covaxin"
              placeholder="Covaxin"
              onChange={this.handleChange}
              value={this.state.covaxin}
            />
            <input
              type="text"
              name="covishield"
              placeholder="Covishield"
              onChange={this.handleChange}
              value={this.state.covishield}
            />
            <input
              type="text"
              name="sputinik"
              placeholder="Sputinik"
              onChange={this.handleChange}
              value={this.state.sputinik}
            />

            <button>Add Item</button>
          </form>
        </section>
      </div>
    );
  }
}

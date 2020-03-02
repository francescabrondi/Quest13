import React from "react";

import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.fetchAPI();
  }

  render() {
    return (
      <div className="App">
        <h1>Movie form</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            id="name-movie"
            name="title"
            placeholder="name of the movie"
            onChange={this.onChange}
            value={this.state.name}
          />
          <br />
          <input
            type="text"
            id="poster"
            name="poster"
            placeholder="url"
            onChange={this.onChange}
            value={this.state.poster}
          />
          <br />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Comments on the movie"
            onChange={this.onChange}
            value={this.state.comment}
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }

  fetchAPI = async () => {
    const url = "https://post-a-form.herokuapp.com/api/movies/";

    const response = await axios.post(url, this.state);

    alert("The movie has been added");
  };
}

export default App;

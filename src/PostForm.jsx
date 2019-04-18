import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Input, TextArea, Card} from "semantic-ui-react";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: ''
        }
    }
  handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({
          [name]: value
      })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        title: this.state.title,
        message: this.state.message,
        id: new Date(),
        editing: false
    }
    this.props.dispatch({
        type: 'ADD_POST',
        data
    })
    this.setState({
        title: '',
        message: ''
    })
    console.log(data)
  }
  render() {
    return (
      <>
        <Card centered>
          <Card.Content>
            <h1>Create Post</h1>
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Enter post title"
                onChange={this.handleChange}
              />{" "}
              <br />
              <br />
              <TextArea
                name="message"
                value={this.state.message}
                rows="5"
                cols="28"
                placeholder="Enter post"
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit">POST</Button>
            </form>
          </Card.Content>
        </Card>
      </>
    );
  }
}
// const mapStateToProps = (state) => {
//     return {
//         posts: state
//     }
// }
export default connect()(PostForm);

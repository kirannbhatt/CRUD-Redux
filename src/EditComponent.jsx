import React, { Component } from "react";

import { connect } from "react-redux";

import { Button, Input , TextArea, Card} from 'semantic-ui-react';

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.post.title,
      newMessage: this.props.post.message
    };
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };
  handleEdit = e => {
    e.preventDefault();
    const data = {
      newTitle: this.state.newTitle,
      newMessage: this.state.newMessage
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.post.id,
      data: data
    });
  };
  render() {
    return (
      <>
        <Card>
          <Card.Content>
            <form onSubmit={this.handleEdit}>
              <Input
                type="text"
                name="newTitle"
                value={this.state.newTitle}
                placeholder="Enter post title"
                onChange={this.handleChange}
              />{" "}
              <br />
              <br />
              <TextArea
                name="newMessage"
                value={this.state.newMessage}
                rows="5"
                cols="28"
                placeholder="Enter post"
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit">UPDATE</Button>
            </form>
          </Card.Content>
        </Card>
      </>
    );
  }
}
export default connect()(EditComponent);
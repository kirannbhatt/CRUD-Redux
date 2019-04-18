import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";
import { Card } from 'semantic-ui-react'
class Post extends Component {
    deleteHandler = () => {
        this.props.dispatch({
            type: 'DELETE_POST',
            id: this.props.post.id
        })
    }
    editHandler = () => {
        this.props.dispatch({
            type: 'EDIT_POST',
            id: this.props.post.id
        })
    }
    render() {
        return (
          <>
            <Card raised>
              <Card.Content>
                <h2>{this.props.post.title}</h2>
                <h2>{this.props.post.message}</h2>
                <Button onClick={this.editHandler}>Edit</Button>
                <Button onClick={this.deleteHandler}>Delete</Button>
              </Card.Content>
            </Card>
          </>
        );
    }
}
export default connect()(Post)
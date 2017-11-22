import React from 'react';
import { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true
		};
	}

	getComments() {
    if (this.state.isOpen) {
      const commentElements = this.props.comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)
		return (
			<div>
				<h4>Comments ({this.props.comments.length})</h4>
				<ul>
					{ commentElements }
				</ul>
			</div>
			);
    } else {
        return  null;
    }
  }

	onHandlerClick = (event) => {
		event.preventDefault();
	
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	getBtnText() {
		return this.state.isOpen ? 'Hide' : 'Show';
	}

	render() {
		if (!this.props.comments || this.props.comments.length == 0) return <h4>There is no comments for this article</h4>;

		return (
			<div>
				<button onClick={ this.onHandlerClick }>
					{ this.getBtnText() }
				</button>
				{ this.getComments() }
			</div>
		)
	}
}
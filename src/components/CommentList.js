import React from 'react';
import { Component } from 'react';

import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}

	getComments() {
		const { comments, isOpen } = this.props;
    if (isOpen) {
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

	getBtnText() {
		return this.props.isOpen ? 'Hide' : 'Show';
	}

	render() {
		if (!this.props.comments.length) return <h4>There is no comments for this article</h4>;

		return (
			<div>
				<button onClick={ this.props.toggleOpen }>
					{ this.getBtnText() }
				</button>
				{ this.getComments() }
			</div>
		)
	}
}

export default toggleOpen(CommentList);
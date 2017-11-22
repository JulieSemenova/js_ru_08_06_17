import React from 'react';
import { Component } from 'react';
import CommentList from './CommentList'

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true
		};
	}

	render() {
		const { article } = this.props;
		const { isOpen } = this.state;
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick = {this.toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{ this.getBody() }
			</div>
		)
	}

	getBody() {
		if (!this.state.isOpen) return null;

		const { article, comments } = this.props;

		return (
			<section>
				{article.text} 
				<CommentList comments={ article.comments }/>
			</section>
		)
	}

	toggleOpen = (event) => {
		event.preventDefault();
		console.log('----', event.nativeEvent);
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

// export default function Article(props) {
// 	const { article } = props;

	// return (
	// 	<div>
	// 		<h3>{article.title}</h3>
	// 		<section>{article.text}</section>
	// 	</div>
	// )
// }
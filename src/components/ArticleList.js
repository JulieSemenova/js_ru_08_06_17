import React from 'react';
import { Component } from 'react';

import Article from './Article';

class ArticleList extends Component {
	
	render() {
		const articleElements = this.props.articles.map((article) => <li key = {article.id}>
		<Article article = {article} /></li>)
		return (
			<ul>
				{ articleElements }
			</ul>
		)
	}
}

export default ArticleList;
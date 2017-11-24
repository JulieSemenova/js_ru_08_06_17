import React, { Component } from 'react';

class ArticlesChart extends Component {
	
	componentDidMount() {
		
	}

	componentWillReceiveProps(nextProps) {
		//update chert fron new articles
	}

	render() {
		return (
			<div ref = 'chart' />
		);
	}

	componentWillUnmount() {
		//clean up
	}
}

export default ArticlesChart;
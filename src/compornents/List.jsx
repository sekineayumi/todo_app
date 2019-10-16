import React from 'react';
import PropTypes from 'prop-types';

/**
 * リストのコンポ
 */
class List extends React.Component {

	render() {
		return (
			<ul>
				{this.props.todoList.map((item, index) => (
					<li key={index}>
						<input type='checkbox' />
						{item.task}
					</li>
				))}
			</ul>
		);
	}
}

List.propTypes = {
	todoList: PropTypes.array.isRequired
}

export default List;
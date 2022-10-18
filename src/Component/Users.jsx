import React, { Component } from 'react'
import User from './User'


export default class Users extends Component {


	render() {
		if (this.props.users.length > 0)
			return (
				<div>
					{this.props.users.map((el) => (
						<User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={el.id} user={el} />
					))}
				</div>
			)
		else
			return (
				<div>
					<h3 className='user'>Пользователей нет</h3>
				</div>
			)
	}
}

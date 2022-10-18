import React, { Component } from 'react'

export default class AddUser extends Component {
	userAdd = {}
	constructor(props){
		super(props)
		this.state = {
			first_name:'',
			last_name:'',
			email:'',
			avatar:1
		}
	}

	render() {
	 return (
		<form ref={(el) => this.myForm = el}>
			<input placeholder='Имя' onChange={(event) => this.setState({first_name: event.target.value})}/>
			<input placeholder='Фамилия' onChange={(event) => this.setState({last_name: event.target.value})} />
			<input placeholder='Почта' onChange={(event) => this.setState({email: event.target.value})}></input>
			<input placeholder='Ссылка на фотографию' onChange={(event) => this.setState({avatar: event.target.value})} />
			<button type="button" onClick={() => {
				this.myForm.reset()
				this.userAdd = {
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					email: this.state.email,
					avatar: this.state.avatar,
				}
				if(this.props.user)
					this.userAdd.id = this.props.user.id
				this.props.onAdd(this.userAdd)
			}
}>Добавить</button>
		</form>
	 )
  }
}

import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css'

export default class Blog extends Component {
	render() {
		return (
			<div>
				<header>
					<ul className="nav justify-content-center">
						<li className="nav-item">
							<NavLink 
							to="/posts" 
							className="nav-link"
							activeStyle='active'
							exact>
								Posts
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/new-post"
								className="nav-link"
								activeStyle='active'
								exact>
								New Post
							</NavLink>
						</li>
					</ul>
				</header>
				<h1 style={{'text-align': 'center'}}>Welcome to my blog!</h1>
				<Switch>
					<Route path="/new-post" component={NewPost} />
					<Route path="/posts/:id?" component={Posts} />
				</Switch>
			</div>
		)
	}
}

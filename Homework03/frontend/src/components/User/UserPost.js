import React from 'react'

import { Card, CardHeader, CardFooter, CardBody, Collapse, Button } from 'reactstrap'


class UserPost extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const user = this.props.data
    return (
      <div style={{ margin: '30px auto', width: '400px' }}>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{user.name + " " + user.posts.length}</Button>
        <Collapse isOpen={this.state.collapse}>
          {user.posts.map(post => (
            <Card>
              <CardHeader>{post.title}</CardHeader>
              <CardBody>{post.body  || <p style={{ opacity: 0.5 }}>No body for this post...</p>}</CardBody>
            </Card>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default UserPost
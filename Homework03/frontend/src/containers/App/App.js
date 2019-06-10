import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  POSTS_QUERY,
  USERS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION,
  USERS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import UserPost from '../../components/User/UserPost'
import classes from './App.module.css'

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    formAuthorID: 1,
    users: []
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthorID } = this.state

    if (!formTitle || !formBody || !formAuthorID) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthorID
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
      authorId: 1
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="formAuthorID" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>

                        <Query query={USERS_QUERY}>
                          {({ loading, error, data, subscribeToMore }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error :(((</p>

                            const select = (
                              <Input 
                                type="select"
                                name="formAuthorID"
                                id="formAuthorID"
                                onChange={e =>
                                  this.setState({ formAuthorID: e.target.value })
                                }
                                >
                              {
                                data.users.map((user, id) => {
                                  this.setState((state, props) => {users: state.users.push(user)});
                                  return (<option value={id+1}>{user.name}</option>)})
                              }
                              </Input>
                            )

                            return <div>{select}</div>
                          }}
                        </Query>

                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={USERS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>

                const users = data.users.map((user, id) => {
                  console.log(user)
                  return (<UserPost data={user} key={id}/>)
              })

                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: USERS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newUser = subscriptionData.data.user.data
                      const newUsers = [...prev.users].map(user => {
                        if (user.id === newUser.id) { user = newUser }
                      })

                      return {
                        ...prev,
                        users: [newUsers]
                      }
                    }
                  })

                return <div>{users}</div>
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App

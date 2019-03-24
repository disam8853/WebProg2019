import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

var posts = [{
        title: "First artical",
        artical: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo odit repellat, adipisci repellendus, dolores deserunt! Ea placeat doloribus nesciunt, modi beatae minima error illo, corporis accusantium laboriosam maiores voluptates earum culpa praesentium dolor labore assumenda nam enim at omnis atque aut! Illum voluptate ad fugit eius ea necessitatibus quibusdam numquam.",
        photo: "https://picsum.photos/200/200"
    },
    {
        title: "Second artical",
        artical: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente modi, expedita odit omnis, dicta voluptatum dolore dolorem vitae, voluptatibus veniam tempore sequi distinctio.",
        photo: "https://picsum.photos/200/200"
    },
    {
        title: "Third artical",
        artical: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias reiciendis a odio atque eos similique, labore quibusdam vitae fugiat deleniti dolorum! Itaque minima blanditiis tempora ipsum inventore dolores delectus, quam dolor quia.",
        photo: "https://picsum.photos/200/200"
    },
    {
        title: "Fourth artical",
        artical: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique magnam eligendi iusto nihil aut, nesciunt et impedit sed.",
        photo: "https://picsum.photos/200/200"
    },
    {
        title: "Fifvth artical",
        artical: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto molestias nisi aperiam nam excepturi, necessitatibus aut ut aspernatur. Nulla, quibusdam, dicta accusamus vero repellat harum nihil ex voluptate!",
        photo: "https://picsum.photos/200/200"
    }
];

class App extends Component {
    render() {
        return (
            <div>
          {
            posts.map(e => 
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={e.photo} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.artical}</p>
                            </div>
                        </div>
                    </div>
                </div>
              )
          }
        </div>
        );
    }
}

export default App;
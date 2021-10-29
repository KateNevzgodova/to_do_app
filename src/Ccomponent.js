import React, { Component } from 'react';
import Menu from './Menu';

export default class Ccomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
            inputValue:'Write here',
            input:'',
            items:[]

        };
        

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.changeText = this.changeText.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
           event.preventDefault()
           this.setState({
               input: this.state.input,
               items:[...this.state.items, this.state.input]
           });
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count- 1
        });
    }
    reset() {
        this.setState({
            count: 0
        })
    }

    changeText(event){
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
                <input type='text' value={this.state.inputValue} onChange={this.changeText} />
                <input type='text' value={this.state.inputValue} />
               
                <h5 style={{color: "red", fontSize:"12px"}}>First To Do List:</h5>
                {/* <h3>{this.state.submit}</h3> */}
                
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>

                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                
            </div>
        )
     }
}
// Ccomponent.defaultProps = {name: 'Alexey'}
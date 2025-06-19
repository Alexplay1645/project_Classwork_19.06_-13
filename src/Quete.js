import React from 'react'
import './Quete.css'


export class Myquote extends React.Component
{

    constructor (props)
    {
        super(props)
        this.func1 = this.func.bind(this);

        this.state={class:'show', text:'hide'}
    }
    func()
    {
        // alert("Hello");
        if (this.state.class==='show')
        {
            this.setState({class: 'hide', text:'show'})
        }
        else{
            this.setState({class: 'show',text:'hide'})
        }
    }

    render() // возврощяет реакт элемент 
    {
        return <div>
            <button onClick={this.func1}>{this.state.text}</button>
            <p className={this.state.class}>{this.props.text}</p>
        </div>
    }

}
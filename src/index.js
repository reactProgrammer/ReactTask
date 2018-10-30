import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    render(){
        return(
            <h1>Hello Swap</h1>
        )
    }
}

class World extends React.Component{
    render(){
        return(
            <h1>Swapnil</h1>
        )
    }
}

class Helloworld extends React.Component{
    render(){
        return(
            <section>
                <Hello/>
                <World/>
            </section>
        )
    }
}

class Demo extends React.Component{
    getFName(){
        return 'swapnil';
    }
    getLName(){
        return 'kurjekar';       
    }
    constructor(){
        super();
        this.city="Nagpur";
    }
    render(){
        return(
            <div>
            <section className="foo">
                Hello
            </section>
            <section>
                <Helloworld/>
            </section>
            <section>
                {2+5}
            </section>
            <section>
                {this.getFName()} {this.getLName()}
            </section>
            <h1>
                {this.city}
            </h1>
            <input type="text" value={this.city}/>

          
           
        </div>
        )
    }
}

class Demo1 extends React.Component{
    constructor(){
        super();
        this.state="Maharashtra";
        this.city={
            name:['Nagpur','Umred','Chandrapur']
        }
    }
    render(){
        return(
           <ul>
{
    this.city.name.map(function(name){
return <Pract datails={name}/>
    })
}

               
           </ul>
           
        )
    }
}

class Pract extends React.Component{
    render(){
        return(
            <li>
                {this.props.datails}
            </li>
        )
    }
}
//ReactDOM.render(<Helloworld/>,document.getElementById('root'));
ReactDOM.render(<Demo/>,document.getElementById('root'));
ReactDOM.render(<Demo1/>,document.getElementById('rootfirst'));

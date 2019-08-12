import React, { Component } from 'react';
import SearchBox from "../components/SearchBox"
import CardList from '../components/cardList';



import Scroll from "../components/Scroll";
import  "./App.css";




class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    

    async componentDidMount(){
        const data = await fetch( "https://jsonplaceholder.typicode.com/users" );
        const jsonRobots = await data.json();

        
        this.setState( { robots: jsonRobots } )
        
    }

    onSearchChange = (event) => {

        this.setState( 
            { searchfield: event.target.value }
        )


    }
    

    render =  () => {



        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

        })

        return (
            <div className="tc">
                    <h1  className="f1"> Battle Robots </h1>
                    <h1 className="f1"> Choose Your Robot!!! </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
            
                

                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                
                
            </div>
        )
    }

}


export default App
import React from 'react';
import './App.css';
import { CardList } from './Components/Card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:''
    };
    // this.handleChange=this.handleChange.bind(this) use when you didn't use arrow function to create method
  } 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
  }
  //handleChange(e){this.something}
  handleChange= (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() { 
    const { monsters,searchField }=this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}
export default App;


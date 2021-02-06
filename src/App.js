import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';

class App extends Component {

  state = {
    isLoading: true,
    data: []
  }

  async componentDidMount() {
    const response = await fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
    const data = await response.json()

    // Необходимо изменить state когда у нас загрузились данные
    this.setState({
      isLoading:false,
      data
    })
  }

  render() {
    return(
      <div className="container">
        {
          this.state.isLoading
          ? <Loader /> // если (state isLoading) - не загрузилиь данные, работает Loader
          : <Table 
            data={this.state.data} /> // если данные загрузились Table, куда передаем параметры data={this.state.data}
        }
      </div>
    );
  }
}

export default App;





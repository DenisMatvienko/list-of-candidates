import './App.css';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView'
import _ from 'lodash';

class App extends Component {

  state = {
    isLoading: true,
    data: [],
    sort: 'asc', // Направление, так же будет принимать desc 
    sortField: 'id',
    row: null
  }

  async componentDidMount() {
    const response = await fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
    const data = await response.json()

    // Необходимо изменить state когда у нас загрузились данные
    this.setState({
      isLoading:false,
      data: _.orderBy(data, this.state.sortField, this.state.sort) // = data: data 

    })
  }

  onSort = sortField => {
    const clonedData = this.state.data // Клонированный массив для сортировки
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc' //Определяем направление. Если равняется направлению 'asc', то мы хотим сделать обратное направление 'desc', в простивном случае, ели = другой переменной то 'asc'
    
    const orderData = _.orderBy(clonedData, sortField, sortType)

    this.setState({
      data: orderData,
      sort: sortType,
      sortField // = sortField: sortField 
    })
  }

  onRowSelect = row => {
    this.setState({row})
  }

  render() {
    return(
      <div className="container">
        {
          this.state.row
          ? <DetailRowView person={this.state.row}/> // если вызываем onRowSelect по клику, срабатывает компонент DetailRowView
          : null // если ничего не делаем то null
        }
        
        {
          this.state.isLoading
          ? <Loader /> // если (state isLoading) - не загрузилиь данные, работает Loader
          : <Table 
            data={this.state.data} // если данные загрузились Table, куда передаем параметры data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort} // при изменении сортировки меняем sort
            sortField={this.state.sortField} // при изменении сортировки меняем sortField
            onRowSelect={this.onRowSelect}
            /> 
            
        }
      </div>
    );
  }
}

export default App;





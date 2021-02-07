import './App.css';
import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView';
import ModeSelector from './ModeSelector/ModeSelector';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

class App extends Component {

  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: 'asc', // Направление, так же будет принимать desc 
    sortField: 'id',
    row: null,
    currentPage: 0
  }

  async fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()

    // Необходимо изменить state когда у нас загрузились данные
    this.setState({
      isLoading: false,
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

  modeSelectHandler = url => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    })

    this.fetchData(url)
  }

  onRowSelect = row => {
    this.setState({row})
  }

  pageChangeHandler = ({selected}) => {
    this.setState({currentPage: selected})
  }

  render() {
    const pageSize = 50;
    // если не выбрали никакой isModeSelected
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeSelectHandler}/>
        </div>
      )
    }

    const displayData = _.chunk(this.state.data, pageSize)[this.state.currentPage]

    return(
      <div className="container"> 
        {
          this.state.row
          ? <DetailRowView className="mt-5" person={this.state.row}/> // если вызываем onRowSelect по клику, срабатывает компонент DetailRowView
          : null // если ничего не делаем то null
        } 

        {
          this.state.isLoading
          ? <Loader/> // если (state isLoading) - не загрузилиь данные, работает Loader
          : <Table 
            data={displayData} // если данные загрузились Table, куда передаем параметры data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort} // при изменении сортировки меняем sort
            sortField={this.state.sortField} // при изменении сортировки меняем sortField
            onRowSelect={this.onRowSelect}
            />  
        }
        
        {
          this.state.data.length > pageSize
            ? <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
          /> : null
        }
      </div>
    );
  }
}

export default App;





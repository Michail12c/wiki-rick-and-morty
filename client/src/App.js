import React from 'react';
import './App.scss';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/shared/Header';
import ListPersonages from './components/ListPersonages';
import PersonageDetail from './components/PersonageDetails';
import BlockModal from './components/BlockModal';
import { api } from './utils/api';

class App extends React.Component {
  state = {list: null, personage: null }

  componentDidMount(){
     this.getList('https://rickandmortyapi.com/api/character');
  }

  getList = async (url) => {
      let result = await api.getPersonages(url);
      this.setState({list: result });
    };

  choicePersonage = (id) => {
    const {list} = this.state;
    const {history} = this.props;
    let activePersonage = list.results.find(item => item.id === id);
    this.setState({personage: activePersonage});
    history.push('/personage');
  }

  getNextList = () => {
    const {list} = this.state;
    this.getList(list.info.next);
  }

  render() {
    const {list, personage} = this.state;

    return (
      <>
       <Header/>

       <Route exact path="/" render = {() => <ListPersonages
         list={list}
         getNextList={this.getNextList}
         choicePersonage={this.choicePersonage}/>}/>

       <Route exact path="/personage" render = {() => <PersonageDetail
         personage={personage}/>}/>

       <Route exact path="/model" render = {() => <BlockModal/>}/>
      </>
    );

  }
}

export default withRouter(App);

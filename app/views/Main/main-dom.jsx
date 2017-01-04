import './main.scss';
import React, { PropTypes } from 'react'

import UpTop from '../../components/UpTop';
import SearchBox from '../../components/SearchBox';
import MoviesList from '../../components/MoviesList';

const MainDom = (props) => {
  const {state} = props;
  const {userList} = state;

  return (
    <section className="main-view">
      <UpTop/>
      <section className="search-box-container">
        <SearchBox addToList={props.handleAddToList}/>
      </section>
      <section className="user-watch-list">
        <MoviesList list={userList}/>
      </section>
    </section>
  )
}

export default MainDom

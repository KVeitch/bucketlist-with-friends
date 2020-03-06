import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import Jawbone from '../Jawbone/Jawbone.jsx'

const ListItem = () => {
    let isJawOpen = true
    return (
      <>
      <div className="item">
        <div className="currentNum">Current Number on List</div>
        <div className="listTitle">Title of Item, this will be long</div>
        <div className="private">Toggle</div>
      </div>
      {isJawOpen?<Jawbone />:''}
      </>
    );

}

ListItem.propTypes = {

};

export default ListItem;
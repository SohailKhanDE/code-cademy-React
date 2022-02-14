import React from 'react';
import { styles } from '../styles.js';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
    render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const catName = this.props.catName;

    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat { catName && catName }</h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange}/>
        <img style={styles.imgStyles} alt='cat' src={copying ? images.copycat : images.quietcat} onClick={toggleTape} />
      <p>{
        copying && this.props.input
      }</p>
      </div>
    );
  };
}

CopyCat.PropTypes = {
  input: PropTypes.string,
  copying: PropTypes.string,
  toggleTape: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired  
}
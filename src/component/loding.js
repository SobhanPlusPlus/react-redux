import {  connect } from 'react-redux';
import React, { Component } from "react";

class Loding extends Component {
 
  
  render() {
    console.log(this.props.loding)
    return (
      <div hidden  id="loding" style={{
 
        visibility: this.props.loding ? 'visible' : 'hidden',
        width: '100%',
        position: 'fixed',
        height: '100%',
         display:'block'
    }} >
    
 
<div className="Parent-loading">

<div className="loding-animation-holder">
    <div className="loading-animator"></div>
    <div className="loading-animator"></div>
    <div className="loading-animator"></div>
    <div className="loading-animator"></div>
    <div className="middle-circle"></div>
</div>
<div className="lod">
<h1>loading</h1>

</div>
</div>



      </div>
    );
  }
}


const mapStateToProps = (state => {
  return {
      loding: state.LodingReducer
  };
});
 
const mapDispatchToProps = dispatch => ({
 //blabla
});

export default  connect(mapStateToProps,mapDispatchToProps)(Loding);

import React from 'react';

const Loader =()=>{
    const styles={
        loader:{
          fontSize:"14px",
          fontWeight:"bold",
          lineHeight:"2px",
          fontFamily:"sans-serif",
          color:"grey",
          position:"absolute",
          top:"50%",
          left:"50%",
          zIndex:101
        },
        loaderIcon:{
          width:"60px",
          height:"60px",
          position:"absolute",
          top:"46%",
          left:"50%",
          zIndex:101
        }
    }
    return(
      <span>
        <img className="loaderIcon" style={styles.loaderIcon} src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>
        <h4 className="loader" style={styles.loader}>loading...</h4>
      </span>
    )
  }

  export default Loader
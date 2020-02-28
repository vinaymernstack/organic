import React    from "react";
import Template from "./blog3column.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class blog3column extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Template/>
        <Footer/>
      </div> 
    )
  }
}

export default blog3column;

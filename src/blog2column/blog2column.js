import React    from "react";
import Template from "./blog2column.jsx";
import Header from '../header/header';
import Footer from '../footer/footer'

class blog2column extends React.Component {
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

export default blog2column;

import React    from "react";
import Template from "./errorpage.jsx";
import Header from '../header/header';
import Footer from '../footer/footer'
class errorpage extends React.Component {
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

export default errorpage;

import React    from "react";
import Template from "./blogdetails.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class blogdetails extends React.Component {
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

export default blogdetails;

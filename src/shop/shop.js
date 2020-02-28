import React    from "react";
import Template from "./shop.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class shop extends React.Component {
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

export default shop;

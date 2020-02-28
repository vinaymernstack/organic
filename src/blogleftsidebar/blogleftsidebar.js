import React    from "react";
import Template from "./blogleftsidebar.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class blogleftsidebar extends React.Component {
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

export default blogleftsidebar;

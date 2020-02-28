import React    from "react";
import Template from "./shoprightsidebar.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class shoprightsidebar extends React.Component {
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

export default shoprightsidebar;

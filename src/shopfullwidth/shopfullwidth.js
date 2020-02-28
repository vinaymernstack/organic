import React    from "react";
import Template from "./shopfullwidth.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class shopfullwidth extends React.Component {
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

export default shopfullwidth;

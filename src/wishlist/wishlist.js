import React    from "react";
import Template from "./wishlist.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class wishlist extends React.Component {
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

export default wishlist;

import React    from "react";
import Template from "./contact.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class contact extends React.Component {
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

export default contact;

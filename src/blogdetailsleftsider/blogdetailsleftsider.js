import React    from "react";
import Template from "./blogdetailsleftsider.jsx";
import Header from '../header/header';
import Footer from '../footer/footer';

class blogdetailsleftsider extends React.Component {
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

export default blogdetailsleftsider;

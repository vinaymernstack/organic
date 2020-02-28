import React    from "react";
import template from "./homepage.jsx";
import Header from '../header/header'
import Slider from '../slider/slider'
import Foodsection from '../foodsection/foodsection'
import Productares from '../productarea/productarea'
import Bannerarea from '../bannerarea/bannerarea'
import Featuresarea from '../featuerarea/featuerarea'
import Tesimonial from '../tesimonialarea/tesimonialarea'
import Blogarea from '../blogarea/blogarea'
import Footer from '../footer/footer'

class homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
      <Header/>
      <Slider/>
      <Foodsection/>
      <Productares/>
      <Bannerarea/>
      <Featuresarea/>
      <Tesimonial/>
      <Blogarea/>
      <Footer/>
    </div>
    )
  }
}

export default homepage;

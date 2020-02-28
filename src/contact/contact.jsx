import "./contact.css";
import React from "react";

function template() {
  return (
    <div className="contact">
      <div class="breadcrumb-area bg-12 text-center">
            <div class="container">
                <h1>Contact</h1>
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
        
        <div class="google-map-area">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30704293.650170054!2d64.38095057830134!3d20.04697759695191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1549616192630" width="100%" height="350" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
        </div>
        

        <div class="contact-area fix mb-95">
            <div class="contact-form pt-110">
                <h1 class="contact-title">TELL US YOUR PROJECT</h1>
                <form id="contact-form" action="#" method="post">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" name="name" id="name" placeholder="First Name *"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="l_name" id="l_name" placeholder="Last Name *"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="email" id="email" placeholder="Email *"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" name="subject" id="subject" placeholder="Subject *"/>
                        </div>
                    </div>
                    <textarea name="message" id="message" placeholder="Message *"></textarea>
                    <button type="submit" class="submit-btn default-btn">
                        <span>Send Email</span>
                    </button>
                    <p class="form-messege"></p>
                </form>
            </div>
            <div class="contact-address pt-110 pb-100">
                <h1 class="contact-title">CONTACT US</h1>
                <div class="contact-info">
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                    <div class="contact-list-wrapper">
                        <div class="contact-list">
                            <i class="fa fa-fax"></i>
                            <span>Address : Duis autem vel eum iriure, United Kingdom.</span>
                        </div>
                        <div class="contact-list">
                            <i class="fa fa-phone"></i>
                            <span>Info@organic.com</span>
                        </div>
                        <div class="contact-list">
                            <i class="fa fa-envelope-o"></i>
                            <span>0(1234) 567 890</span>
                        </div>
                    </div>
                </div>
                <div class="working-time">
                    <h2>Working hours</h2>
                    <span><span>Monday – Saturday:</span>  08AM – 22PM</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default template;

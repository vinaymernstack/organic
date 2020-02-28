import "./blogarea.css";
import React from "react";
import {Link} from 'react-router-dom'

function template() {
  return (
    <div className="blogarea">
      <div class="blog-area pb-95">
         <div class="container">
            <div class="section-title text-center mb-50">
               <div class="section-img d-flex justify-content-center">
                  <img src="assets/img/icon/title.png" alt=""/>
               </div>
               <h2><span>Organic </span>from our blog</h2>
            </div>
         </div>
         <div class="container">
            <div class="custom-row">
               <div class="blog-carousel">
                  <div class="custom-col text-center">
                     <div class="single-blog">
                        <div class="blog-image">
                           <a href="#"><img src="assets/img/blog/1.jpg" alt=""/></a>
                        </div>
                        <div class="blog-text">
                           <h4><a href="#">Coconut improve heart and immunity.</a></h4>
                           <div class="post-meta">
                              <span class="author-name">post by: <span>Organic</span></span>
                              <span class="post-date"> - Oct 30,2019</span>
                           </div>
                           <p>Coconut milk is one of the healthiest foods on world, health benefits of coconut milk make it quite popular.</p>
                           <a href="#" class="default-btn">Read more</a>
                        </div>
                     </div>
                  </div>
                  <div class="custom-col text-center">
                     <div class="single-blog">
                        <div class="blog-image">
                           <a href="#"><img src="assets/img/blog/2.jpg" alt=""/></a>
                        </div>
                        <div class="blog-text">
                           <h4><a href="#">The most healthful food you can eat.</a></h4>
                           <div class="post-meta">
                              <span class="author-name">post by: <span>Organic</span></span>
                              <span class="post-date"> - Sep 11,2019</span>
                           </div>
                           <p>Health benefits of apple include improved digestion, prevention of stomach disorders, gallstones.</p>
                           <a href="#" class="default-btn">Read more</a>
                        </div>
                     </div>
                  </div>
                  <div class="custom-col text-center">
                     <div class="single-blog">
                        <div class="blog-image">
                           <a href="#"><img src="assets/img/blog/3.jpg" alt=""/></a>
                        </div>
                        <div class="blog-text">
                           <h4><a href="#">Delicious and nutritious vegetable.</a></h4>
                           <div class="post-meta">
                              <span class="author-name">post by: <span>Organic</span></span>
                              <span class="post-date"> - Apr 22,2019</span>
                           </div>
                           <p>Research shows drinking beetroot juice benefit digestion, boost athletic performance. They are a good source.</p>
                           <a href="#" class="default-btn">Read more</a>
                        </div>
                     </div>
                  </div>
                  <div class="custom-col text-center">
                     <div class="single-blog">
                        <div class="blog-image">
                           <a href="#"><img src="assets/img/blog/1.jpg" alt=""/></a>
                        </div>
                        <div class="blog-text">
                           <h4><a href="#">Coconut improve heart and immunity.</a></h4>
                           <div class="post-meta">
                              <span class="author-name">post by: <span>Organic</span></span>
                              <span class="post-date"> - Oct 30,2019</span>
                           </div>
                           <p>Coconut milk is one of the healthiest foods on world, health benefits of coconut milk make it quite popular.</p>
                           <a href="#" class="default-btn">Read more</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default template;

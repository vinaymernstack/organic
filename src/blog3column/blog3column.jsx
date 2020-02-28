import "./blog3column.css";
import React from "react";
import {Link} from 'react-router-dom' 

function template() {
  return (
    <div className="blog-3-column">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>Blog 3 Column</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Blog 3 Column</li>
               </ul>
            </nav>
         </div>
      </div>
      

      <div class="post-area blog-area pt-110 pb-95 blog-column-3">
         <div class="container">
            <div class="row text-center">
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/1.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">Coconut improve heart and immunity.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Oct 30,2018</span>
                        </div>
                        <p>Coconut milk is one of the healthiest foods on world, health benefits of coconut milk make it quite popular.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/2.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">The most healthful food you can eat.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Sep 11,2018</span>
                        </div>
                        <p>Health benefits of apple include improved digestion, prevention of stomach disorders, gallstones.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/5.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">The most healthful food you can eat.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Sep 11,2018</span>
                        </div>
                        <p>Health benefits of apple include improved digestion, prevention of stomach disorders, gallstones.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/2.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">The most healthful food you can eat.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Sep 11,2018</span>
                        </div>
                        <p>Health benefits of apple include improved digestion, prevention of stomach disorders, gallstones.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/3.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">Delicious and nutritious vegetable.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Apr 22,2018</span>
                        </div>
                        <p>Research shows drinking beetroot juice benefit digestion, boost athletic performance. They are a good source.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="single-blog">
                     <div class="blog-image">
                        <a href="#"><img src="assets/img/blog/4.jpg" alt=""/></a>
                     </div>
                     <div class="blog-text">
                        <h4><a href="#">Coconut improve heart and immunity.</a></h4>
                        <div class="post-meta">
                           <span class="author-name">post by: <span>Organic</span></span>
                           <span class="post-date"> - Oct 30,2018</span>
                        </div>
                        <p>Coconut milk is one of the healthiest foods on world, health benefits of coconut milk make it quite popular.</p>
                        <a href="#" class="default-btn">Read more</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="pagination-wrapper">
               <nav aria-label="navigation">
                  <ul class="pagination">
                     <li class="page-item active"><a class="page-link" href="#">1</a></li>
                     <li class="page-item"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item"><a class="page-link" href="#">4</a></li>
                     <li class="page-item"><a class="page-link" href="#">></a></li>
                     <li class="page-item"><a class="page-link" href="#">>|</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
    </div>
  );
};

export default template;

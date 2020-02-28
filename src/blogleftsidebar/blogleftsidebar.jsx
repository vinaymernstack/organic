import "./blogleftsidebar.css";
import React from "react";
import {Link} from 'react-router-dom'
function template() {
  return (
    <div className="blogleftsidebar">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>Blog Left Sidebar</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Blog Left Sidebar</li>
               </ul>
            </nav>
         </div>
      </div>
      
      
      <div class="post-area blog-area pt-110 pb-95 blog-column">
         <div class="container">
            <div class="row">
               <div class="order-xl-2 order-lg-2 col-xl-9 col-lg-8">
                  <div class="row text-center">
                     <div class="col-lg-6 col-md-6">
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
                     <div class="col-lg-6 col-md-6">
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
                     <div class="col-lg-6 col-md-6">
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
                     <div class="col-lg-6 col-md-6">
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
                     <div class="col-lg-6 col-md-6">
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
                     <div class="col-lg-6 col-md-6">
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
               <div class="col-xl-3 col-lg-4">
                  <div class="sidebar-wrapper">
                     <div class="sidebar-widget sidebar-search-widget">
                        <h3>Search</h3>
                        <form action="#" class="sidebar-search-box">
                           <input type="text" placeholder="Search..."/>
                           <button type="button"><i class="fa fa-search"></i></button>
                        </form>
                     </div>
                     <div class="sidebar-widget">
                        <h3>Blog Archives</h3>
                        <div class="sidebar-widget-option-wrapper">
                           <div class="sidebar-widget-option">
                              <a href="#">March 2015 <span>(1)</span></a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">December 2015 <span>(3)</span></a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">Novermber 2014 <span>(7)</span></a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">September 2015 <span>(1)</span></a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">August 2015 <span>(3)</span></a>
                           </div>
                        </div>
                     </div>
                     <div class="sidebar-widget">
                        <h3>Recent Posts</h3>
                        <div class="sidebar-widget-option-wrapper">
                           <div class="sidebar-widget-option">
                              <a href="#">Blog Image Post</a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">Post With Gallery</a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">Post With Audio</a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">Post With Video</a>
                           </div>
                           <div class="sidebar-widget-option">
                              <a href="#">Post Image Link</a>
                           </div>
                        </div>
                     </div>
                     <div class="sidebar-widget">
                        <h3>Product Tags</h3>
                        <ul class="sidebar-widget-tag">
                           <li><a href="#">chilled</a></li>
                           <li><a href="#">Dark</a></li>
                           <li><a href="#">Euro</a></li>
                           <li><a href="#">fashion</a></li>
                           <li><a href="#">food</a></li>
                           <li><a href="#">hardware</a></li>
                           <li><a href="#">hat</a></li>
                           <li><a href="#">hipster</a></li>
                           <li><a href="#">holidays</a></li>
                           <li><a href="#">light</a></li>
                           <li><a href="#">cup</a></li>
                           <li><a href="#">place</a></li>
                           <li><a href="#">t-shirt</a></li>
                           <li><a href="#">travel</a></li>
                           <li><a href="#">video-2</a></li>
                           <li><a href="#">white</a></li>
                        </ul>
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

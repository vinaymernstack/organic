import "./blogdetailsleftsider.css";
import React from "react";
import {Link} from 'react-router-dom'

function template() {
  return (
    <div className="blogdetailsleftsider">
      <div class="breadcrumb-area bg-12 text-center">
         <div class="container">
            <h1>Blog Details Left Sidebar</h1>
            <nav aria-label="breadcrumb">
               <ul class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Blog Details Left Sidebar</li>
               </ul>
            </nav>
         </div>
      </div>
       

      <div class="post-area blog-area pt-110 pb-95 post-details">
         <div class="container">
            <div class="row">
               <div class="order-xl-2 order-lg-2 col-xl-9 col-lg-8">
                  <div class="single-post-item text-center pb-70">
                     <h3 class="single-post-title"><a href="#">Blog image post</a></h3>
                     <div class="single-post-meta">
                        <span> Posts by : admin</span>
                        <span>March 10, 2018</span>
                     </div>
                     <div class="single-post-img">
                        <img src="assets/img/blog/post/1.jpg" alt=""/>
                     </div>
                     <div class="single-post-info-text text-left">
                        <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend. Pellentesque faucibus sem ante, non malesuada odio varius nec. Suspendisse potenti.</p>
                        <p class="post-quote">Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                        <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                        <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc. Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
                     </div>
                     <div class="single-post-tag">
                        <a href="#" class="scroll-down">3 comments</a>
                        <div class="single-post-tag-link">
                           <span> / Tags:</span>
                           <a href="#">hipster,</a>
                           <a href="#">holidays,</a>
                           <a href="#">light,</a>
                           <a href="#">place,</a>
                           <a href="#">video-2</a>
                        </div>
                     </div>
                     <h4 class="single-post-share">Share this post</h4>
                     <div class="post-social-link">
                        <a href="#" target="_blank">
                        <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                        <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank">
                        <i class="fa fa-pinterest"></i>
                        </a>
                        <a href="#" target="_blank">
                        <i class="fa fa-google-plus"></i>
                        </a>
                        <a href="#" target="_blank">
                        <i class="fa fa-linkedin"></i>
                        </a>
                     </div>
                  </div>
                  <div class="post-comment-area pt-90 scroll-area">
                     <h4 class="post-title">3 comments</h4>
                     <div class="post-comment-container">
                        <div class="single-post-comment">
                           <div class="single-post-image">
                              <img src="assets/img/icon/logo.jpg" alt=""/>
                           </div>
                           <div class="single-post-content">
                              <div class="single-post-info">
                                 <a href="#">admin</a>
                                 <span>October 6, 2018 at 1:38 am</span>
                                 <p>just a nice post</p>
                              </div>
                              <button type="button">reply</button>
                           </div>
                        </div>
                        <div class="single-post-comment">
                           <div class="single-post-image">
                              <img src="assets/img/icon/logo.jpg" alt=""/>
                           </div>
                           <div class="single-post-content">
                              <div class="single-post-info">
                                 <a href="#">demo</a>
                                 <span>October 6, 2018 at 1:38 am</span>
                                 <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                              </div>
                              <button type="button">reply</button>
                           </div>
                        </div>
                        <div class="single-post-comment">
                           <div class="single-post-image">
                              <img src="assets/img/icon/logo.jpg" alt=""/>
                           </div>
                           <div class="single-post-content">
                              <div class="single-post-info">
                                 <a href="#">admin</a>
                                 <span>October 6, 2018 at 1:38 am</span>
                                 <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                              </div>
                              <button type="button">reply</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <form action="#" class="post-comment-form">
                     <h4 class="post-title">Leave a Reply</h4>
                     <p>Your email address will not be published. Required fields are marked *</p>
                     <label for="post-text">Comment</label>
                     <textarea name="post-comment" id="post-text" cols="30" rows="10"></textarea>
                     <div class="row">
                        <div class="col-lg-4">
                           <label for="post-name">Name *</label>
                           <input type="text" id="post-name"/>
                        </div>
                        <div class="col-lg-4">
                           <label for="post-email">Email *</label>
                           <input type="email" id="post-email"/>
                        </div>
                        <div class="col-lg-4">
                           <label for="post-website">Website</label>
                           <input type="text" id="post-website"/>
                        </div>
                     </div>
                     <button type="submit" class="default-btn">post comment</button>
                  </form>
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

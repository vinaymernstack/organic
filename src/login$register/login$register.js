import React    from "react";
import template from "./login$register.jsx";
import $ from 'jquery'
import Axios from 'axios'
class login$register extends React.Component {
  
  state = {
    fullname:"",
    username:"",
    email:"",
    password:"",
    cnpassword:"",
    checkbox:"",
    loginUser:"",
    loginpass:"",
 }
 
 fullname=(t)=>{ 
    if($("#fullname").val()==""){
      $("#fullnamevald").hide() 
    }
   this.setState({
      fullname:t.target.value
   })
 }
 username=(t)=>{
    if(this.state.username!=""){
      $("#usernamevald").hide()   
    }
    this.setState({
       username:t.target.value
    })
  }
  email=(t)=>{
     if(this.state.username!=""){
      $("#emailval").hide()     
     }
    this.setState({
       email:t.target.value
    })
  }
  password=(t)=>{
    this.setState({
       password:t.target.value
    })
  }
  cnpassword=(t)=>{
   if(this.state.cnpassword!=""){
      $("#passwordval").hide()     
     }
    this.setState({
       cnpassword:t.target.value
    })
  }
  checkbox=(t)=>{
   this.setState({
      checkbox:t.target.value
   })
}
  validate=()=>{
   if($("#fullname").val()==''){
      $("#fullnamevald").show()
   }
  else if($("#username").val()==''){
    $("#usernamevald").show()
   }
   else if($("#email").val()==''){
   $("#emailval").show()
   }
   else if($("#password").val() != $("#cnpwrd").val()){
         $("#passwordval").show()
   }
   else{
      if($("#remember_reg").prop('checked')){
         localStorage.setItem(this.state.username,this.state.password)
      }
      this.sendDataToServer()
   }
  } 
        
  sendDataToServer=()=>{
     let data={
      fullname:this.state.fullname,
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
     }

     Axios.post("http://localhost:1111/register",data).then(res=>{
        if(res.data.msg=="success"){
            $("#successmsg").show()
           this.refreshregistepage()
        }
     })
  }
  refreshregistepage=()=>{
     setTimeout(()=>{
      $("#fullname").val("")
      $("#username").val("")
      $("#email").val("")
      $("#password").val("")
      $("#cnpwrd").val("")
      $("#successmsg").hide()
      $("#register_box").remove()
     },2000)
  }

  loginUser=(t)=>{
     this.setState({
        loginUser:t.target.value
     })
  }
  loginChakPass=(t)=>{
     let chkvalue = localStorage.getItem(t.target.value)
   this.setState({
      loginpass:chkvalue
   })
  }
  loginPass=(t)=>{
   $("#loginpassvald").hide()
   this.setState({
      loginpass:t.target.value,
   })
  }
  //login page js
  loginValidation=()=>{
   if($("#loginUser").val()==''){
      $("#loginuservald").show()
   }
  else if($("#userPass").val()==''){
    $("#loginpassvald").show()
   }
   else{
      if($("#remember_me").prop('checked')){
         localStorage.setItem(this.state.loginUser,this.state.loginpass)
      }
      this.sendLogindataToServer()
   }
  }

  sendLogindataToServer=()=>{
     let data={
      loginUser:this.state.loginUser,
      loginpass:this.state.loginpass
     }
   Axios.post("http://localhost:1111/login",data).then(res=>{
      console.log(res)
      if(res.data[0].password!=this.state.loginpass){
        $("#loginpassvald").show()
      }else{
        $("#loginsuccessmsg").show()
        this.refreshLoginpage()
      }
   })
  }
  refreshLoginpage=()=>{
   setTimeout(()=>{
    $("#loginUser").val("")
    $("#loginPass").val("")
    $("#loginsuccessmsg").hide()
    $("#login_box").remove()
   },2000)
}

  render() {
    return (
      <div>
      <div class="modal fade" id="login_box" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>
                  </div>
                  <div class="modal-body">
                     <div class="form-pop-up-content">
                        <h2>Login to your account</h2>
                        <form>
                           <div class="form-box">
                              <input type="text" placeholder="User Name" id="loginUser" onChange={this.loginUser.bind(this)} onBlur={this.loginChakPass.bind(this)}/>
                              <div id="loginuservald">* Enter your username</div>
                              <input type="password" placeholder="Password" id="loginPass" value={this.state.loginpass}
                              onChange={this.loginPass.bind(this)} />
                              <div id="loginpassvald">* Enter valid password</div>
                              <div id="loginsuccessmsg">user login successfully</div>
                           </div>
                           <div class="checkobx-link">
                              <div class="left-col">
                                 <input type="checkbox" id="remember_me"/><label for="remember_me">Remember Me</label>
                              </div>
                              <div class="right-col"><a href="#">Forget Password?</a></div>
                           </div>
                           <button onClick={this.loginValidation}>Sign In</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         

         <div class="modal fade" id="register_box" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>
                  </div>
                  <div class="modal-body">
                     <div class="form-pop-up-content">
                        <h2>Sign Up</h2>
                        <form>
                           <div class="form-box">
                              <input type="text" placeholder="Full Name"  id="fullname" onChange={this.fullname.bind(this)}/>
                              <div id="fullnamevald"> * enter your full name</div>
                              <input type="text" placeholder="User Name"
                              id="username" onChange={this.username.bind(this)}/>
                              <div id="usernamevald"> * enter your username</div>
                              <input type="email" placeholder="Email"
                              id="email" onChange={this.email.bind(this)}/>
                              <div id="emailval"> * enter your email adress</div>
                              <input type="password" placeholder="Password"
                              id="password" onChange={this.password.bind(this)}/>
                              <div id="passwordval"> * password mismatch</div>
                              <input type="password" placeholder="Confirm Password" id="cnpwrd" onChange={this.cnpassword.bind(this)}/> 
                           </div>

                           <div class="checkobx-link">
                              <div class="left-col">
                                 <input type="checkbox" id="remember_reg" onClick={this.checkbox.bind(this)}/><label for="remember_reg">Remember Me</label>
                              </div>
                           </div>
                           <div id="successmsg"> user registered successfully</div>

                           
                           <button class="text-uppercase"  id="register" onClick={this.validate}>Register</button>
                        
      
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div> 
    )
  }
}

export default login$register;

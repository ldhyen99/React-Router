import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      fillCountry:"Vietnam"
    }
  }
   //Dispose a form
   submitForm = (event) => {
    event.preventDefault()
    this.setState({
      isRedirect: true
    })
   } 
//Luu thong tin nhap vao, vao 1 mang
   isChange = (event) => {
     const names = event.target.name
     const values = event.target.value
     this.setState({
      [names]: values 
    });
   }

   getValues = () => {
     var content =""
     content += "The Nam is: " + this.state.fillName
     content += " / The Email is: " + this.state.fillEmail
     content += " / The Phone is: " + this.state.fillPhone
     content += " / The Mess is: " + this.state.fillMess
     content += " / The Country is: " + this.state.fillCountry
     content += " / The File is: " + this.state.fillFile
     return content
    
   }

   isFileChange = (event) => {
    const fFile = event.target.files[0].name
    console.log(fFile)
    this.setState({
      fillFile : fFile
    })
   }
    render() {

      //bam submit dieu huong ve "/"
      if(this.state.isRedirect) {
        console.log(this.getValues())
        return <Redirect to="/" />
      }
        return (
            <div>
  <header className="masthead NewsList">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center text-uppercase ">Contact me</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*End header*/}
  {/*Begin contact*/}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Input your information</h2>
      <hr />
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon">
          <i className="fas fa-star" />
        </div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input onChange={(event) => this.isChange(event)} name="fillName"className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input onChange={(event) => this.isChange(event)} name ="fillEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input onChange={(event) => this.isChange(event)} name="fillNumber"className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Country</label>
                 <select value={this.state.fillCountry} className="form-control" name="fillCountry" onChange={(event) => this.isChange(event)}>
                   <option value="Vietnam">Vietnam</option>
                   <option value="US">US</option>
                   <option value="French">French</option>
                 </select>
               </div>
                <p className="help-block text-danger" />
              </div>
            <br />

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fillFile" />
              <p className="help-block text-danger" />

            </div>
            </div>             

            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea onChange={(event) => this.isChange(event)} name="fillMess"className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <br />

            <div id="success" />
            <div className="form-group">
              <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

        );
    }
}

export default Contact;
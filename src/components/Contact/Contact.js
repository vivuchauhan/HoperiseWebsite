import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import Top from '../header/top/Top';
import NavBar from '../header/nav/NavBar';
import Footer from '../About/Footer';
import ContactHeader from './Header/Header';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Add logic here to submit form data to server or external service
  };

  return (
    <div className="App">
      {/* Google Font  */}
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      {/* CSS Libraries  */}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

      <Top />
      <NavBar />
      <ContactHeader />
      {/* Contact page */}
      <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>Contact for any query</h2>
        </div>
        <div className="contact-img">
          <img src="https://economictimes.indiatimes.com/photo/53005806.cms" alt="Image" />
        </div>
        <div className="contact-form">
          {formSubmitted ? (
            <p>Thank you for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button className="btn btn-custom" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      </div>
    <Footer />
    </div>
  );
}

export default Contact;



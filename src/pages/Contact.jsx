import React from 'react'
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const HandleSendBtn = () => {
    const senderName= document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message= document.getElementById('message').value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!senderName || !email || !subject || !message) {
      toast.error("All fields are required 😐");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address 😐");
    } else {
        const data = {
            name : senderName,
            email:email,
            subject : subject,
            message : message
        }
        fetch("http://localhost:8080/api/contact", {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data) 

        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data.message);
          })
          .catch(error => {
            console.error('Error:', error);
          }
          )
        toast.success('Message sent successfully 😊');
    }
  }

  return (
    <div className='d-flex align-items-center container page-wrapper justify-content-center text-light'>
      
  <section  className="mb-4">

    <h2  className="h1-responsive font-weight-bold text-center my-4 fs-1">Contact us</h2>
    
    <p  className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div  className="row">
        <div  className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div  className="row">
                    <div  className="col-md-6">
                        <div  className="md-form mb-2">
                            <input type="text" id="name" name="name"  className="form-control" placeholder='Your Name'/>
                        </div>
                    </div>
                    <div  className="col-md-6">
                        <div  className="md-form mb-2">
                            <input type="text" id="email" name="email"  className="form-control" placeholder='Your email'/>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-md-12">
                        <div  className="md-form mb-2">
                            <input type="text" id="subject" name="subject"  className="form-control" placeholder='Subject'/>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-md-12">
                        <div  className="md-form">
                            <textarea type="text" id="message" name="message" rows="2"  className="form-control md-textarea" placeholder='Please enter you message here Your message'></textarea>
                        </div>
                    </div>
                </div>
            </form>
            <div  className="text-center text-md-left mt-2">
                <a  className="btn btn-primary" onClick={HandleSendBtn}>Send</a>
            </div>
            <div  className="status"></div>
        </div>
        <div  className="col-md-3 text-center">
            <ul  className="list-unstyled mb-2">
                <li>
                    <a href="https://www.linkedin.com/company/cyber-gurukulam/" target='_blank' className='btn  social-link discord'  rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                        <span className='ms-1'>Connect with LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+917878329711" target='_blank' className='btn social-link whatsapp'  rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                        <span className='ms-1'>Message On whatsapp</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  </section>
    </div>
  )
}

export default Contact;
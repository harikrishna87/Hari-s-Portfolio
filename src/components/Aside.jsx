import { useState, useEffect, useRef } from "react";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

const Aside = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/Hari.jpg"}
            alt="Hari"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Hari">
            Veta Hari Babu
          </h1>

          <p className="title">Web Developer</p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn
          onClick={() => setShowModal(true)}
        >
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox/>
              
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:vetaharibabu087@gmail.com" className="contact-link">
                vetaharibabu087@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone/>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+919550172687" className="contact-link">
                +91 9550172687
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar/>
             
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2002-02-12">Feb 12, 2002</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid/>
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Nellore, Andhra Pradesh</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <div className="modal-header">
              <h2 className="gradient-text">Contact Details</h2>
              <button 
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <IoCloseCircle size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <ul className="modal-contacts-list">
                <li className="modal-contact-item">
                  <div className="icon-box">
                    <GiMailbox size={20} />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title gradient-text">Email</p>
                    <a href="mailto:vetaharibabu087@gmail.com" className="contact-link gradient-text">
                      vetaharibabu087@gmail.com
                    </a>
                  </div>
                </li>

                <li className="modal-contact-item">
                  <div className="icon-box">
                    <GiPhone size={20} />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title gradient-text">Phone</p>
                    <a href="tel:+919550172687" className="contact-link gradient-text">
                      +91 9550172687
                    </a>
                  </div>
                </li>

                <li className="modal-contact-item">
                  <div className="icon-box">
                    <GiCalendar size={20} />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title gradient-text">Birthday</p>
                    <time className="gradient-text" dateTime="2002-02-12">Feb 12, 2002</time>
                  </div>
                </li>

                <li className="modal-contact-item">
                  <div className="icon-box">
                    <GiMayanPyramid size={20} />
                  </div>
                  <div className="contact-info">
                    <p className="contact-title gradient-text">Location</p>
                    <address className="gradient-text">Nellore, Andhra Pradesh</address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #1a1a2e;
          border-radius: 15px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          border: 1px solid #2d3748;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: #16213e;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }

        .gradient-text {
          background: linear-gradient(to right, rgb(56, 189, 248), rgb(56, 189, 248));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: all 0.3s ease;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #ff6b6b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: transform 0.2s ease;
        }

        .close-btn:hover {
          color: #ff8080;
          transform: scale(1.1);
        }

        .modal-body {
          padding: 20px;
        }

        .modal-contacts-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .modal-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: none;
        }

        .modal-contact-item .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background-color: #0f3460;
          color: rgb(56, 189, 248);
          margin-right: 15px;
          transition: all 0.3s ease;
        }
        
        .modal-contact-item:hover .icon-box {
          background-color: #1a1a40;
          transform: translateY(-2px);
        }

        .modal-contact-item:nth-child(1) .icon-box {
          background-color: #1f305e;
        }

        .modal-contact-item:nth-child(2) .icon-box {
          background-color: #3a0ca3;
        }

        .modal-contact-item:nth-child(3) .icon-box {
          background-color: #2e294e;
        }

        .modal-contact-item:nth-child(4) .icon-box {
          background-color: #240046;
        }

        .contact-info .contact-title {
          font-size: 14px;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .contact-info .contact-link,
        .contact-info time,
        .contact-info address {
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .contact-info .contact-link:hover {
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
        }

        .modal-contact-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
        }
      `}</style>
    </aside>
  );
};

export default Aside;
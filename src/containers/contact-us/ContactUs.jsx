import { useState } from 'react';
import Modal from 'react-modal';

import './ContactUs.css';
import ContactTable from './ContactTable';
import useAuthAxios from '../../hooks/useAuthAxios';

const INITIAL_DATA = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const authAxios = useAuthAxios();
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postContact, setPostContact] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // Reset the form after closing the modal
    setFormData(INITIAL_DATA);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAxios.post(
        'contact',
        formData
      );
      openModal({
        type: 'success',
        message: 'Your message has been sent successfully. Thank you!',
      });
      setPostContact(true)
    } catch (error) {
      openModal({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div>
                <div className="address">
                  <h4>Location:</h4>
                  <p>Melbourne, Australia</p>
                </div>
                <div className="email">
                  <h4>Email:</h4>
                  <p>contact@aussietea.com</p>
                </div>
                <div className="phone">
                  <h4>Phone:</h4>
                  <p>(+61) 123-456-7890</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96429.97201272316!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                frameBorder="0"
                className="info-iframe"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="py-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                  onChange={handleChange}
                  value={formData.subject}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>{modalContent.type === 'success' ? 'Success!' : 'Error'}</h2>
        <p>{modalContent.message}</p>
        <button className='close-button' onClick={closeModal}>Ok</button>
      </Modal>
      <ContactTable postContact={postContact} setPostContact={setPostContact}/>
    </section>
  );
};

export default ContactUs;

import React from 'react';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './_footer.scss';
import LayoutSection from './LayoutSection';

export const Footer = () => (
  <footer className="fb-footer">
    <LayoutSection>
      <form action="" className="p-2 fb-form form-horizontal">
        <div className="columns my-2">
          <div className="column col-md-5 col-sm-12">
            <h3 className="">Contact Us</h3>
            <p>
              For questions, orders, or general inquiries, send us a
              message!
            </p>

            <p>Follow us on social media!</p>
            <div className="d-flex text-center mb-2">
              <a
                className="btn btn-primary btn-action circle mr-1"
                href="https://www.facebook.com/flawlessbeautyenc/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="btn btn-primary btn-action circle mx-1"
                href="https://www.instagram.com/flawless_beauty_enc/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="btn btn-primary btn-action circle ml-1"
                href="mailto:info@flawlessbeautyenc.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="hide-sm divider-vert" />
          <div className="column col-md-6 col-sm-12">
            <div id="contact" className="form-group">
              <input
                className="form-input"
                type="text"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-input textarea-sm"
                id="message"
                rows="3"
                placeholder="Message"
                required
              />
            </div>
            <button className="btn btn btn-primary">Send</button>
          </div>
        </div>
      </form>
    </LayoutSection>
  </footer>
);

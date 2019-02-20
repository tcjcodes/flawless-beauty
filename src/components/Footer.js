import React from 'react';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './_footer.scss';
import LayoutSection from './LayoutSection';
import ContactFormSection from './ContactForm';

export const Footer = () => (
  <footer className="fb-footer">
    <LayoutSection>
      <div className="p-2 fb-form form-horizontal">
        <div className="columns my-2">
          <div className="column col-md-5 col-sm-12">
            <h3 className="">Contact</h3>
            <p>
              Message us for orders, questions, or general inquiries.
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
            <ContactFormSection />
          </div>
        </div>
      </div>
    </LayoutSection>
  </footer>
);

import React from 'react'
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './_footer.scss'

export const Footer = () => (
  <footer className="fb-footer">
    <div className="container grid-lg">
      <form action="" className="form-horizontal">
        <div className="columns">
          <div className="column col-5 col-ml-auto">
            <h3 className="">Contact Us</h3>
            <p>
              For questions or general inquiries, feel free to send us a
              message.
            </p>

            <p>Follow us on social media!</p>
            <div className="d-flex text-center">
              <a
                className="btn btn-primary btn-action circle mr-1"
                href="#"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="btn btn-primary btn-action circle ml-1"
                href="#"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="divider-vert" />
          <div className="column col-5 col-mr-auto">
            <div className="form-group">
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
            <button class="btn btn btn-primary">Send</button>
          </div>
        </div>
      </form>
    </div>
  </footer>
)

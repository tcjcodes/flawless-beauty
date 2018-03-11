import React from 'react';

function testEmail(str) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    if (!this.validateEmail(this.state)) {
      return;
    }
    this.props.afterError();
/*    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.props.afterSuccess && this.props.afterSuccess();
      })
      .catch((error) => {
        this.props.afterError && this.props.afterError();
        console.error(error);
      })*/;
    e.preventDefault();
  };

  validateEmail = ({ email }) => {
    if (testEmail(email)) {
      return true;
    }
    alert('Please fill in a valid e-mail address');
    return false;
  };

  render() {
    return (
      <form
        name="contact"
        method="post"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div id="contact" className="form-group">
          <input hidden name="bot-field" />
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-input textarea-sm"
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn btn-primary">
          Send
        </button>
      </form>
    );
  }
}

class ContactFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formStatus: null };
  }

  afterSuccess = () => {
    this.setState({ formStatus: 'SUCCESS' });
  };

  afterError = () => {
    this.setState({ formStatus: 'ERROR' });
  };

  render() {
    return (
      <div>
        {!this.state.formStatus && (
          <ContactForm
            afterSuccess={this.afterSuccess}
            afterError={this.afterError}
          />
        )}
        {this.state.formStatus === 'SUCCESS' && (
          <p>Thank you! We'll get back to you shortly.</p>
        )}
        {this.state.formStatus === 'ERROR' && (
          <p>
            ☹️ Oh no! Something went wrong. Please e-mail us directly at{' '}
            <a href="mailto:info@flawlessbeautyenc.com">
              info@flawlessbeautyenc.com
            </a>.
          </p>
        )}
      </div>
    );
  }
}

export default ContactFormSection;

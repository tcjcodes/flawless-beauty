import React from 'react';
import styled from 'react-emotion';
import LayoutSection from '../components/LayoutSection';
import img from '../img/aboutus.jpeg';
import './_about.scss';

const BoxContainer = styled('div')`
  display: inline-block;
  position: relative;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: 10px;
    left: 10px;

    border: 2px solid ${(props) => props.theme.gold};
  }
`;
const BoxImage = styled('img')`
  vertical-align: middle;
  width: 100%;
  max-width: 300px;
`;

export const AboutPage = () => {
  return (
    <LayoutSection className="fb-about-page">
      <div className="columns">
        <div className="column col-md-12 col-4 col-mx-auto text-center d-flex left-col">
          <div>
            <BoxContainer>
              <BoxImage src={img} />
            </BoxContainer>
          </div>
        </div>
        <div className="column right-col col-md-12 col-6 col-mr-auto">
          <h1 className="about-title">About Us</h1>

          <h3 className="fb-script">Edilene</h3>
          <p>
            Edilene is a full time working mom who fell in love with LipSense
            during her wedding cruise. Edilene didn’t think of buying waterproof
            makeup until a friend told her the week before her wedding that she
            didn’t post any of her honeymoon pictures because she didn’t have
            any makeup on. Twenty-four hours before embarking on the cruise,
            Edilene rushed to Sephora and bought all waterproof makeup and her
            cousin Christine let her borrow her Napa LipSense, which she used
            for the entire seven day cruise!
          </p>

          <h3 className="fb-script">Christine</h3>
          <p>
            Coffee is a small tree or shrub that grows in the forest understory
            in its wild form, and traditionally was grown commercially under
            other trees that provided shade. The forest-like structure of shade
            coffee farms provides habitat for a great number of migratory and
            resident species.
          </p>
        </div>
      </div>
    </LayoutSection>
  );
};

export default AboutPage;
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import LayoutSection from '../components/LayoutSection';
import lipsense from '../img/katemaxlips.jpg';
import shadowsense from '../img/shadowsense.jpg';
import './_products.scss';

const Card = ({ img, title, children, ...otherProps }) => (
  <div {...otherProps} className="col-3 col-md-6 col-sm-12 px-1">
    <div className="fb-card-link">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title} className="img-responsive" />
        </div>
        <div className="card-header">
          <div className="h5 card-title">{title}</div>
        </div>
        <div className="card-body">
          <Dotdotdot clamp={7}>{children}</Dotdotdot>
        </div>
        <div className="card-footer" />
      </div>
    </div>
  </div>
);

export const ProductPage = () => (
  <LayoutSection className="fb-product-page">
    <div className="container grid-md">
      <h1 className="">Products</h1>

      <h2 className="fb-script">Lips</h2>

      <section className="columns mb-2">
        <Card id="lips" img={lipsense} title="LipSense">
          The original long-lasting lip color, it is waterproof, does{' '}
          <strong>not</strong> kiss-off, smear-off, rub-off or budge-off!
        </Card>

        <Card img={lipsense} title="LipSense Diamonds">
          LipSense Diamond shades feature the original long-lasting LipSense
          formula with genuine crushed diamond gemstones blended in for
          incredible sparkle.
        </Card>

        <Card img={lipsense} title="LipSense Gloss">
          Moisturizing Glosses not only cover and protect naked lips but also
          improve the longevity (staying power) of LipSense Liquid Lip Color.
          Gloss provides exceptional protection from the elements and helps
          repair dry, damaged, chapped and/or sensitive lips.
        </Card>

        <Card img={lipsense} title="Diamond Gloss">
          LOREM IPSUM DOLORES
        </Card>
      </section>
      <div className="next-row">
        <h2 className="fb-script">Eyes</h2>
        <section className="columns next-row">
          <Card id="eyes" img={shadowsense} title="ShadowSense">
            LOREM IPSUM DOLORES
          </Card>
        </section>
      </div>
    </div>
  </LayoutSection>
);

export default ProductPage;

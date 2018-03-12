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

export const ProductPageTemplate = (
  {
    // image,
    // title,
    // heading,
    // description,
    // intro,
    // main,
    // testimonials,
    // fullImage,
    // pricing,
  }
) => (
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
          Diamond gloss lorem ipsum, Coffee is a small tree or shrub that grows
          in the forest understory in its wild form.
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

export default ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <ProductPageTemplate
    // image={frontmatter.image}
    // title={frontmatter.title}
    // heading={frontmatter.heading}
    // description={frontmatter.description}
    // intro={frontmatter.intro}
    // main={frontmatter.main}
    // testimonials={frontmatter.testimonials}
    // fullImage={frontmatter.full_image}
    // pricing={frontmatter.pricing}
    />
  );
};

// export const productPageQuery = graphql`
//   query ProductPage($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       frontmatter {
//         title
//         path
//         image
//         heading
//         description
//         intro {
//           blurbs {
//             image
//             text
//           }
//           heading
//           description
//         }
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image
//           }
//           image2 {
//             alt
//             image
//           }
//           image3 {
//             alt
//             image
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `

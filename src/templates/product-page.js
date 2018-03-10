import Link from 'gatsby-link';
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import LayoutSection from '../components/LayoutSection';
import SmallButton from '../components/SmallButton';
import lipsense from '../img/katemaxlips.jpg';
import shadowsense from '../img/shadowsense.jpg';
import './_products.scss';

const Card = ({ to, img, title, children }) => (
  <div className="col-3 col-md-6 col-sm-12 px-1">
    <Link className="fb-card-link" to={to}>
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title} className="img-responsive" />
        </div>
        <div className="card-header">
          <div className="h5 card-title">{title}</div>
        </div>
        <div className="card-body">
          <Dotdotdot clamp={5}>{children}</Dotdotdot>
        </div>
        <div className="card-footer">
          <SmallButton className="btn-primary">Shop</SmallButton>
        </div>
      </div>
    </Link>
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

      <h2 id="lips" className="fb-script">
        Lips
      </h2>

      <section className="columns mb-2">
        <Card to="/" img={lipsense} title="LipSense">
          Our most popular gloss, Coffee is a small tree or shrub that grows in
          the forest understory in its wild form.
        </Card>

        <Card to="/" img={lipsense} title="LipSense Diamonds">
          Luxury gloss Coffee is a small tree or shrub that grows in the forest
          understory in its wild form.
        </Card>

        <Card to="/" img={lipsense} title="LipSense Gloss">
          Coffee is a small tree or shrub that grows in the forest understory in
          its wild form.
        </Card>

        <Card to="/" img={lipsense} title="Diamond Gloss">
          Diamond gloss lorem ipsum, Coffee is a small tree or shrub that grows
          in the forest understory in its wild form.
        </Card>
      </section>
      <div className="next-row">
        <h2 id="eyes" className="fb-script">
          Eyes
        </h2>
        <section className="columns next-row">
          <Card to="/" img={shadowsense} title="ShadowSense">
            EyeShadow Coffee is a small tree or shrub that grows in the forest
            understory in its wild form.
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

import React from 'react';
import graphql from 'graphql';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import lipsense from '../img/katemaxlips.jpg';
import shadowsense from '../img/shadowsense.jpg';
import './_products.scss';
import { cx, css } from 'emotion';
import Link from 'gatsby-link'

const Card = ({ to, img, title, children }) => (
  <Link className={css`&:hover{ text-decoration: none; color: inherit; }`} to={to}>
    <div className={cx(`card`, css`
          transition: all 0.3s;
          box-shadow: none;
          &:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .12);
          }
          `)}>
      <div className="card-image">
        <img src={img} alt={title} className="img-responsive" />
      </div>
      <div className="card-header">
        <div className="h5 card-title">{title}</div>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  </Link>
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
  <section className="fb-product-page container grid-lg fb-section">
    <div className="container grid-md">
      <h1 className="">Products</h1>

      <h2 className="fb-script">Lips</h2>

      <section className="columns mb-2">
        <div className="column">
          <Card to='/' img={lipsense} title='LipSense'>
            <p>
              Our most popular gloss, Coffee is a small tree or shrub that
              grows in the forest understory in its wild form.
            </p>
          </Card>
        </div>

        <div className="column">
          <Card to='/' img={lipsense} title='LipSense Diamonds'>
            <p>
              Luxury gloss Coffee is a small tree or shrub that
              grows in the forest understory in its wild form.
            </p>
          </Card>
        </div>

        <div className="column">
          <Card to='/' img={lipsense} title='LipSense Gloss'>
            <p>
              Coffee is a small tree or shrub that
              grows in the forest understory in its wild form.
            </p>
          </Card>
        </div>

        <div className="column">
          <Card to='/' img={lipsense} title='Diamond Gloss'>
            <p>
              Diamond gloss lorem ipsum, Coffee is a small tree or shrub that
              grows in the forest understory in its wild form.
            </p>
          </Card>
        </div>
      </section>

      <section className="columns mt-2">
        <div className="column col-4">
          <h2 className="fb-script">Eyes</h2>

          <div className="column">
            <Card to='/' img={shadowsense} title='ShadowSense'>
              <p>
                EyeShadow Coffee is a small tree or shrub that
                grows in the forest understory in its wild form.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  </section>
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

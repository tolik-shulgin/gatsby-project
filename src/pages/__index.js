// import React from "react";
// import { graphql } from "gatsby";
// // import { Link } from "gatsby"
// // import { StaticImage } from "gatsby-plugin-image"

// // import Layout from "../components/Layout/Layout"
// // import Seo from "../components/seo"


// // const IndexPage = (props) => (
// //   <Layout>
// //     <Seo title="Home" />
// //     <h1>Hi people</h1>
// //     <p>{props}</p>
// //     <p>Welcome to your new Gatsby site.</p>
// //     <p>Now go build something great.</p>
// //     {/* <StaticImage
// //       src="../images/gatsby-astronaut.png"
// //       width={300}
// //       quality={95}
// //       formats={["auto", "webp", "avif"]}
// //       alt="A Gatsby astronaut"
// //       style={{ marginBottom: `1.45rem` }}
// //     /> */}
// //   </Layout>
// // )

// // export default IndexPage

// // export default function Home({ data }) {
// //   //highlight-line
// //   return (
// //     <Layout>
// //       <Seo title="home" />
// //       {/* highlight-start */}
// //       <h1>My WordPress Blog</h1>
// //       <h4>Posts</h4>
// //       {data.allWpPost.nodes.map((node) => (
// //         <div>
// //           <p>{node.title}</p>
// //           <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
// //         </div>
// //       ))}
// //       {/* highlight-end */}
// //     </Layout>
// //   )
// // }

// // export const pageQuery = graphql`
// //   query {
// //     allWpPost(sort: { fields: [date] }) {
// //       nodes {
// //         title
// //         excerpt
// //         slug
// //       }
// //     }
// //   }
// // `
// console.log("ASDASDA");
// const IndexPage = ({data,location}) => {
//   console.log(data);
//   return (
//     // <Layout>
//       <p>{data.wordddpppress.pageBy.title}</p>
//     // </Layout>
//   )
// }
  

// export default IndexPage;

// export const pageQuery = graphql`
// query MyQuery {
//   wordddpppress {
//     pageBy(uri: "/") {
//       id
//       title
//       content
//     }
//   }
// }
// `
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const createFrontPage = require( './create-pages/front-page' );
//  const createAllPages = require( './create-pages/pages' );
//  const createAllPosts = require( './create-pages/posts' );
//  const createFrontPage = require( './create-pages/front-page' );
 //const createBlogPage = require( './create-pages/blog' );
 //const createArchivePage = require( './create-pages/archive' );
 const path = require( 'path' );
//  console.log("asdasdasdasd");

/**
 * 
 * new create pages
 */
// Create all pages.
// console.log("create pages function start");
exports.createPages = async ( { actions, graphql } ) => {
  // console.log("create pages function in process");
	await createFrontPage( { actions, graphql } );
};
/**
 * new create pages END
 */


/*

exports.createPages = ({ graphql, actions }) =>{
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
    query PostsQuery{
      wordPress{
        posts{
          nodes{
            title
            id
            slug
            uri
            elementorData
          }
        }
      }
    }
  `, { limit:1000 }).then(result => {
    if (result.errors){
      throw result.errors
    }
    //create blog post pages.
    result.data.wordPress.posts.nodes.forEach(edge => {
      createPage({
        path: `${edge.uri}`,
        component: blogPostTemplate,
        context: edge,
      })
    })
  })
}


*/

// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const result = await graphql(`
//     {
//         posts {
//             nodes {
//               uri
//               title
//               link
//               content
//             }
//           }
//     }
//   `, { limit:1000 }).then(result => {
//     if (result.errors){
//       throw result.errors
//     }
//     //create blog post pages.
//     result.data.wordPress.posts.nodes.forEach(edge => {
//       createPage({
//         path: `${edge.uri}`,
//         component: blogPostTemplate,
//         context: edge,
//       })
//     })
//   })
// }
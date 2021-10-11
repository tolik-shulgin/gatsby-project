const { slash } = require( `gatsby-core-utils` );

const frontPageTemplate = require.resolve(`../src/templates/front-page/index.js`);
// const {SeoFragment} = require( './fragments/seo/index.js' );

// Get all the front page data.
const GET_FRONT_PAGE = `
query MyQuery {
	wordddpppress {
	  pageBy(uri: "/") {
		id
		title
		content
	  }
	}
  }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			// .then( ( { data } ) => {
			// 	// console.log(data);
			// 	const { HWGraphQL: { page } } = data;
			// 	console.log("this is HWGraphQL const print:");
			// 	console.log(HWGraphQL);
			// 	// let allThePosts = [];
			// 	// allPosts.nodes && allPosts.nodes.map( post => {

			// 	// 	// Push the categories data in form of an array, to make it searchable
			// 	// 	let postData = post;
			// 	// 	postData.categoriesData = [];

			// 	// 	postData.categories.edges.map( category => {
			// 	// 		postData.categoriesData.push( category.node.name );
			// 	// 	} );

			// 	// 	allThePosts.push( postData );

			// 	// } );
			// 	// return { page: pageBy, posts: posts.nodes, allPosts: allThePosts };
			// 	return { page: page };
			// } );
			// .then((result) => {
			// 	console.log(JSON.stringify(result,null,4));
			// 	// process.exit();
			// 	return { page: result };
			// })
			.then( ( { data } ) => {
				return { wordddpppress: { id , title, content } } = data;
			})
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { wordddpppress } ) => {
		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: {
				wordddpppress
			},
		} );

	} )

};


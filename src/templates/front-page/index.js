// import React from "react";
// // import Layout from "../../components/layout";
// // import Hero from "../../components/home/hero";
// // import Search from "../../components/home/search";
// // import FeaturedPosts from "../../components/home/feature-posts";
// // import LatestPosts from '../../components/home/latest-posts';
// // import Error from "../../components/error";
// // import { isEmpty } from 'lodash';
// // import SEO from "../../components/seo";

// console.log("this is front page template file");

// const FrontPage = ( props ) => {
// console.log(JSON.stringify(props,null,4));
// 	const {
// 		      pageContext: {
// 			    //   page: { frontPageMeta: { banner, searchSection, featuredPostsSection } },
//                 //   page: { frontPageMeta: { page } }
// 			    //   posts,
// 			    //   postSearchData: { allPosts, options },
//                 //   elementorData,
//                 // page: {props},
// 		      }
// 	      } = props;

// 	return (
// 		// <Layout>
// 			{
// 				// ! isEmpty( props.pageContext ) ? (
// 				// 	<>
// 				// 		<SEO title="Phoenix: Gatsby WordPress Theme" seo={props?.pageContext?.page?.seo} uri={'/'}/>
// 				// 		<Hero data={ banner }/>
// 				// 		<Search data={ searchSection } posts={ allPosts } engine={ options }/>
// 				// 		<FeaturedPosts data={ featuredPostsSection }/>
// 				// 		<LatestPosts data={ posts }/>
// 				// 	</>
// 				// ) : (
// 				// 	<Error message="Something Went Wrong"/>
// 				// )
//                 // console.log(JSON.stringify(props,null,4));
// 			}
// 		// </Layout>
//         // <div>
//         //     JSON.stringify(props,nell,4);
//         // </div>
// 	)
// };
// export default FrontPage;
import React from "react";
// import Layout from "../../components/Layout/Layout";

const frontPageTemplate = (props) => {
    const { pageContext } = props;

    return(
        <div>
            <h1>{pageContext.wordddpppress.pageBy.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: pageContext.wordddpppress.pageBy.content }}></div>
        </div>
    )
}
export default frontPageTemplate;
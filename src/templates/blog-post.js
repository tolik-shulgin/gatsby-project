import * as React from "react"
import Layout from "../components/Layout/Layout"
// import Seo from "../components/seo"

const blogPostTemplate = (data) => {
    console.log("test");
    console.log({data});
    const elementorData = JSON.parse(data.pageContext.elementorData);
    return(
        <Layout>
            {/* <Seo title="Home" /> */}
            <h1>{data.pageContext.title}</h1>
        </Layout>
    )
}

export default blogPostTemplate

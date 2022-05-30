import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { BlogArticleQuery } from "../../graphql-types";

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {console.log(data)}
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogArticle {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;

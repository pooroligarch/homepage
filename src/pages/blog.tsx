import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

type IBlogPost = {
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
  slug: string;
  body: string;
};

type IBlogPostQuery = {
  data: {
    allMdx: {
      nodes: IBlogPost[];
    };
  };
};

const BlogPage = ({ data }: IBlogPostQuery) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id} className="my-4 prose">
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
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
        slug
      }
    }
  }
`;

export default BlogPage;

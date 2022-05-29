import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { BlogIndexQuery } from '../../graphql-types';

const BlogPage = (data: BlogIndexQuery) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout >
  );
}

export const query = graphql`
  query BlogIndex{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
  
`;

export default BlogPage;
import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import Head from 'next/head';

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="All about Mohammad Hassani | Head of Development Department & React js / React Native Developer at Vasetkala | Student at vru.ac.ir "/>
        <meta name="keywords" content="Mohammad Hassani,Mohammad-hassani,hassani_mohammad_mh,mohammad hassani"/>
        <meta name="author" content="Mohammad Hassani, hasani9821.mh@gmail.com"/>
        <meta name="url" content="https://hasani.id.ir"/>
        <meta name="copyright" content="Mohammad Hassani"/>
        <meta name="summary" content="Mohammad Hassani"/>
        <meta name="Classification" content="Personal"/>
        <meta name="abstract" content="about Mohammad Hassani"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="https://hasani.id.ir/assets/bl33hIcon-01f3a8f7.png?raw=tru" />
      </Head>
      <Page
        title="Posts"
        description="This is list of all my posts"
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;

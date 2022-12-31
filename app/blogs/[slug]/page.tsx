import { notFound } from 'next/navigation';
import Container from "../../../src/components/Container";
import RichText from "../../../src/components/RichText";
import Banner from "../../../src/elements/Banner";
import { ResponseBlog } from "../../../src/types/api/blog";
import { blogValueDefault } from "./blogValueDefault";

type params = {
  params: any
}

async function getBlog(id: string) {
  const res = await fetch(`${process.env.HOST}/api/getBlog?id=${id}`);
  if(!res.ok) throw new Error("Not found blog");
  return res.json();
}

const Blog = async ({ params }: params) => {
  const { slug } = params
  let blog: ResponseBlog = blogValueDefault;

  try {
    blog = await getBlog(slug);
  } catch (e) {
    console.error(e);
    notFound();
  } 

  return(
    <>
      <Banner sx={blog.styles} backgroundImage={blog.blogBanner} title={blog.title} subtitle={blog.subtitle} /> 
      <Container>
        <RichText content={blog.content.json} links={blog.content.links} />
      </Container>
    </>
  )
}

export default Blog;

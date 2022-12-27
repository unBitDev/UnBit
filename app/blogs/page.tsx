import Card from '../../src/components/Card';
import Container from '../../src/components/Container';
import { ResponseBlogs } from '../../src/types/api/blogs'
import { formatDate } from '../../src/utils/formatDate';

async function getInfoBlogs() {
  const res = await fetch(`${process.env.HOST}/api/blogs`);
  if(!res.ok) throw new Error('Failed to fetch data blog');
  return res.json();
}

const Blogs = async () => {
  let blogs: ResponseBlogs[] = [];
  try {
    blogs = await getInfoBlogs();

    blogs.map((blog: ResponseBlogs) => {
      blog.publicationDate = formatDate(new Date(blog.publicationDate));
    })
  } catch (e) {
    console.error(e);
  }

  return <>
    <Container>
      <div className="grid gap-7 grid-cols-4 max-md:gap-0 max-md:gap-y-7 max-md:grid-cols-1">
        {blogs.map((blog: ResponseBlogs, key: number) => (
          <Card 
            key={key}
            title={blog.title}
            shortDescription={blog.shortDescription}
            image={blog.coverImage}
            publicationDate={blog.publicationDate}
            href={`/blogs/${blog.id}`}
            linked
          />
        ))}
      </div>
    </Container>
  </>
}

export default Blogs;

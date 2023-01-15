import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulBlogsResponse, ContentfulBlogs, ResponseBlogs } from "../../src/types/api/blogs";

const shortByDate = (items: any[]): any[] => {
	items.sort(function (a: { publicationDate: string }, b: { publicationDate: string }) {
    const dateA = new Date(a.publicationDate);
    const dateB = new Date(b.publicationDate);
		if (dateA.getTime() > dateB.getTime()) {
			return -1;
		}
		if (dateA.getTime() < dateB.getTime()) {
			return 1;
		}
		return 0;
	});

	return items;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') res.status(500).send({msg: "Method request invalid!"});
  
  const contentfulBlogsArray: ContentfulBlogs[] = [];  
  const limit: number = req.query?.limit ? parseInt(req.query?.limit.toString()) : 200;
  const authentication: string = `Bearer ${process.env.CONTENTFUL_TOKEN}`
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/dhleg4prj5f3/environments/${process.env.CONTENTFUL_ENVIROMENT}`, {
    method: 'POST',
    headers: {
      Authorization: authentication,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
          blogsCollection(limit: ${limit}, where: { published:true }) {
            items {
              title,
              shortDescription,
              coverImage { url },
              publicationDate,
              sys { id }
            },
            limit
            skip
            total
          }
        }`
    })
  }); 

  const blogsResponseContentful: ContentfulBlogsResponse = await response.json();
  Array.prototype.push.apply(contentfulBlogsArray, blogsResponseContentful.data.blogsCollection.items); 

  res.setHeader('Cache-Control', `public, s-maxage=300, max-age=300, stale-while-revalidate=299`);

  const dateNow = new Date();
  const blogs: ResponseBlogs[] = [];
  contentfulBlogsArray.forEach((contentfulBlog: ContentfulBlogs) => {
    const dateBlog = new Date(contentfulBlog.publicationDate);
    if(dateBlog > dateNow) return;

    blogs.push({
      title: contentfulBlog.title,
      shortDescription: contentfulBlog.shortDescription,
      coverImage: contentfulBlog.coverImage.url,
      publised: contentfulBlog.published,
      publicationDate: contentfulBlog.publicationDate,
      id: contentfulBlog.sys.id
    })
  })
 
  const blogsResponse: ResponseBlogs[] = shortByDate(blogs);

  return res.status(200).send(blogsResponse);
}

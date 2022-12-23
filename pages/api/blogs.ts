import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulBlog, ContentfulBlogResponse, ResponseBlog } from "../../src/types/api/blogs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') res.status(500).send({msg: "Method request invalid!"});
  
  const contentfulBlogsArray: ContentfulBlog[] = [];
  const blogsResponse: ResponseBlog[] = [];
  
  let skip: number = 0;
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
          blogsCollection(limit: ${limit}, skip: ${skip}, where: {
              published:true
            }) {
            items {
              title,
              subtitle,
              blogBanner { url },
              blogContent {
                  json
              },
              publicationDate,
              codeAuthor
            },
            limit
            skip
            total
          }
        }`
    })
  }); 

  const blogsResponseContentful: ContentfulBlogResponse = await response.json();
  Array.prototype.push.apply(contentfulBlogsArray, blogsResponseContentful.data.blogsCollection.items);
  skip = skip + limit;

  contentfulBlogsArray.forEach((contentfulBlog: ContentfulBlog) => {
    blogsResponse.push({
      title: contentfulBlog.title,
      shortDescription: contentfulBlog.shortDescription,
      blogContent: contentfulBlog.blogContent.json,
      blogBanner: contentfulBlog.blogBanner.url,
      publised: contentfulBlog.published,
      publicationDate: contentfulBlog.publicationDate,
      codeAuthor: contentfulBlog.codeAuthor,
      subtitle: contentfulBlog.subtitle
    })
  })

  return res.status(200).send(blogsResponse);
}

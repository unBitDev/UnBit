import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulBlogResponse, ResponseBlog } from "../../src/types/api/blog";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET') res.status(500).send({msg: "Method request invalid!"});

  if (!req.query?.id) res.status(400).send({msg: "Require slug blog!"});

  const id = req.query?.id;
  const authentication: string = `Bearer ${process.env.CONTENTFUL_TOKEN}`;
 
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/dhleg4prj5f3/environments/${process.env.CONTENTFUL_ENVIROMENT}`, {
    method: 'POST',
    headers: {
      Authorization: authentication,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
          blogs(id: "${id}") {
            title,
            subtitle,
            blogBanner { url },
            blogContent { json },
            publicationDate,
            codeAuthor
          }
        }`
    })
  });

  const blogResponseContentful: ContentfulBlogResponse = await response.json();
  const blogResponse: ResponseBlog = {
    title: blogResponseContentful.data.blogs.title,
    blogBanner: blogResponseContentful.data.blogs.blogBanner.url,
    content: blogResponseContentful.data.blogs.blogContent,
    publicationDate: blogResponseContentful.data.blogs.publicationDate,
    author: blogResponseContentful.data.blogs.codeAuthor,
    subtitle: blogResponseContentful.data.blogs.subtitle
  }

  res.status(200).send(blogResponse);
}

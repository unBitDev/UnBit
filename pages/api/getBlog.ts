import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulAuthorResponse, ResponseAuthor } from "../../src/types/api/author";
import { ContentfulBlogResponse, ResponseBlog } from "../../src/types/api/blog";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET') res.status(500).send({msg: "Method request invalid!"});

  if (!req.query?.id) res.status(400).send({msg: "Require slug blog!"});

  const id = req.query?.id;
  const authentication: string = `Bearer ${process.env.CONTENTFUL_TOKEN}`;
 
  const responseBlog = await fetch(`https://graphql.contentful.com/content/v1/spaces/dhleg4prj5f3/environments/${process.env.CONTENTFUL_ENVIROMENT}`, {
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
            blogContent { 
              json,
              links {
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    width
                    height
                    description
                  }
                  hyperlink {
                  sys{
                    id
                  }
                  width
                  height
                  description
                  url
                  }
                }
              }
            },
            publicationDate,
            styles,
            codeAuthor
          }
        }`
    })
  }); 

  const blogResponseContentful: ContentfulBlogResponse = await responseBlog.json();

  const responseAuthor = await fetch(`https://graphql.contentful.com/content/v1/spaces/dhleg4prj5f3/environments/${process.env.CONTENTFUL_ENVIROMENT}`, {
    method: 'POST',
    headers: {
      Authorization: authentication,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
          authorCollection(where: { code: "${blogResponseContentful.data.blogs.codeAuthor}" }){
            items {
              name,
              avatar { url }
            }
          }
        }`
    })
  });

  const authorResponseContentul: ContentfulAuthorResponse = await responseAuthor.json();

  const author: ResponseAuthor = {
    name: authorResponseContentul.data.authorCollection.items[0].name,
    avatar: authorResponseContentul.data.authorCollection.items[0].avatar.url
  }

  res.setHeader('Cache-Control', `public, s-maxage=300, max-age=300, stale-while-revalidate=299`); 

  const stylesObject: any = blogResponseContentful.data.blogs.styles
  let styles: string = "";
  
  for(let key in stylesObject) {
    styles = `${styles} ${stylesObject[key]}`
  }

  const blog: ResponseBlog = {
    title: blogResponseContentful.data.blogs.title,
    blogBanner: blogResponseContentful.data.blogs.blogBanner.url,
    content: blogResponseContentful.data.blogs.blogContent,
    publicationDate: blogResponseContentful.data.blogs.publicationDate,
    author,
    styles,
    subtitle: blogResponseContentful.data.blogs.subtitle
  }

  res.status(200).send(blog);
}

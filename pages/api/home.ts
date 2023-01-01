import { NextApiRequest, NextApiResponse } from "next";
import { ContentfulHome, ContentfulHomeResponse, HomeResponse } from "../../src/types/api/home";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') res.status(500).send({msg: "Method request invalid!"});

  const idVersion: string = "1T6RNS1XGjBERyrfP5FsiN";
  const authentication: string = `Bearer ${process.env.CONTENTFUL_TOKEN}`
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/dhleg4prj5f3/environments/${process.env.CONTENTFUL_ENVIROMENT}`, {
    method: 'POST',
    headers: {
      Authorization: authentication,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        home(id: "${idVersion}") {
          title
          subtitle
          banner { url }
          shortBlogDescription {
            json
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
          }
          whoIAm {
            json
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
          }
        }
      }`
    })
  });

  const responseHomeContentful: ContentfulHomeResponse = await response.json();
  const contentfulHome: ContentfulHome = responseHomeContentful.data.home;

  const responseHome: HomeResponse =  {
    title: contentfulHome.title,
    subtitle: contentfulHome.subtitle,
    banner: contentfulHome.banner.url,
    shortBlogDescription: contentfulHome.shortBlogDescription,
    whoIAm: contentfulHome.whoIAm
  }

  res.status(200).send(responseHome);
}

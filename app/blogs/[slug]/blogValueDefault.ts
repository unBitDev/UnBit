import { ResponseBlog } from "../../../src/types/api/blog";

export const blogValueDefault: ResponseBlog = {
  title: "",
  blogBanner: "",
  content: {
    json: {
      data: {},
      content: [],
      nodeType: ""
    },
    links: {
      assets: {
        block: [{
          sys: {
            id: "",
            spaceId: "",
            publishedAt: "",
            firstPublishedAt: "",
            enviromentId: "",
            publishedVersion: 0
          },
          title: "",
          description: "",
          url: "",
          width: "",
          height: "",
          filename: ""
        }],
        hyperlink: [{
          sys: {
            id: "",
            spaceId: "",
            publishedAt: "",
            firstPublishedAt: "",
            enviromentId: "",
            publishedVersion: 0
          },
          title: "",
          description: "",
          url: "",
          width: "",
          height: "",
          filename: ""
        }]
      }
    }
  },
  publicationDate: "",
  author: {
    name: "",
    avatar: ""
  }
}

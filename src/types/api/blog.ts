import { ContentfulAsset, ContentfulRichtext } from "../shared/contentful";

export type ResponseBlog = {
  title: string;
  blogBanner: string;
  content: ContentfulRichtext;
  publicationDate: string;
  author: string;
  subtitle?: string;
}

export type ContentfulBlogResponse = {
  data: {
    blogs: {
      title: string;
      blogBanner: ContentfulAsset;
      blogContent: ContentfulRichtext;
      publicationDate: string;
      codeAuthor: string;
      subtitle?: string;
    }
  }
}

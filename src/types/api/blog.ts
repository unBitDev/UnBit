import { ContentfulAsset, ContentfulRichtext } from "../shared/contentful";
import { ResponseAuthor } from "./author";

export type ResponseBlog = {
  title: string;
  blogBanner: string;
  content: ContentfulRichtext;
  publicationDate: string;
  author: ResponseAuthor;
  styles?: string;
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
      styles?: {
        textColor?: string;
      };
      subtitle?: string;
    }
  }
}

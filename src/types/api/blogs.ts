import { ContentfulAsset, ContentfulSys } from "../shared/contentful";

export type ResponseBlogs = {
  title: string;
  shortDescription: string;
  coverImage: string;
  publised: boolean;
  publicationDate: string;
  id: string;
}

export type ContentfulBlogs = {
  title: string;
  shortDescription: string; 
  coverImage: ContentfulAsset;
  published: boolean;
  publicationDate: string;
  sys: ContentfulSys;
}

export type ContentfulBlogsResponse = {
  data: {
    blogsCollection: {
      items: ContentfulBlogs[],
      limit: number;
      skip: number;
      total: number;
    }
  }
}

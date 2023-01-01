import { ContentfulAsset, ContentfulRichtext } from "../shared/contentful";

export type HomeResponse = {
  title: string;
  banner: string;
  shortBlogDescription: ContentfulRichtext;
  whoIAm: ContentfulRichtext; 
  subtitle?: string;
}

export type ContentfulHomeResponse = {
  data: {
    home: ContentfulHome;
  }
}

export type ContentfulHome = {
  title: string;
  banner: ContentfulAsset;
  shortBlogDescription: ContentfulRichtext;
  whoIAm: ContentfulRichtext; 
  subtitle?: string;
}

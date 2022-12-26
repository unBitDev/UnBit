import { ContentfulAsset } from "../shared/contentful";

export type ResponseAuthor = {
  name: string;
  avatar: string;
}

export type ContentfulAuthorResponse = {
  data: {
    authorCollection: {
      items: ContentfulAuthorItem[];
    }
  }
}

type ContentfulAuthorItem = {
  name: string;
  avatar: ContentfulAsset;
}

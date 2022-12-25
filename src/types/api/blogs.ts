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

export type ContentfulBlogResponse = {
  data: {
    blogsCollection: {
      items: ContentfulBlogs[],
      limit: number;
      skip: number;
      total: number;
    }
  }
}

type ContentfulAsset = {
	title: string;
	description: string;
	filename: string;
	url: string;
	width: string;
	height: string;
}

type ContentfulSys = {
  id: string;
  spaceId: string;
  enviromentId: string;
  publishedAt: string;
  firstPublishedAt: string;
  publishedVersion: number;
}

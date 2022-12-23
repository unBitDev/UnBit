export type ResponseBlog = {
  title: string;
  shortDescription: string;
  blogContent: ContentBlogContent;
  blogBanner: string;
  publised: boolean;
  publicationDate: string;
  codeAuthor: string;
  subtitle?: string;
}

export type ContentfulBlog = {
  title: string;
  shortDescription: string;
  blogContent: {
    json: ContentBlogContent;
  }
  blogBanner: ContentfulAsset;
  published: boolean;
  publicationDate: string;
  codeAuthor: string;
  subtitle?:string;
}

export type ContentfulBlogResponse = {
  data: {
    blogsCollection: {
      items: ContentfulBlog[],
      limit: number;
      skip: number;
      total: number;
    }
  }
}

type ContentBlogContent = {
  data: any;
  content: ContentBlogContent[],
  nodeType: string;
}

type ContentfulAsset = {
	title: string;
	description: string;
	filename: string;
	url: string;
	width: string;
	height: string;
}

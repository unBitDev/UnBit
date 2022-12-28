export type ContentfulRichtext = {
  json: ContentfulJSONRichText;
  links: {
    assets: {
      block: ContentfulAssets;
      hyperlink: ContentfulAssets;
    }
  }
}

export type ContentfulAssets ={
  sys: ContentfulSys;
  title: string;
  description: string;
  filename: string;
  url: string;
  width: string;
  height: string;
} 

export type ContentfulAsset = {
	title: string;
	description: string;
	filename: string;
	url: string;
	width: string;
	height: string;
}

export type ContentfulSys = {
  id: string;
  spaceId: string;
  enviromentId: string;
  publishedAt: string;
  firstPublishedAt: string;
  publishedVersion: number;
}

type ContentfulJSONRichText = {
  data: any;
  content: ContentfulContentRichtext[];
  nodeType: string;
}

type ContentfulContentRichtext = {
  data: any;
  marks: any[];
  value: string;
  nodeType: string;
}

export type ContentfulRichtext = {
  json: ContentfulJSONRichText;
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

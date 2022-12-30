import { ContentfulAssets } from "../../types/shared/contentful";

export type AssetMap = {
  url: string;
  description: string;
  width: number;
  height: number;
}

export const formatAssets = (assetsBlock: ContentfulAssets[]): Map<string, AssetMap> => {
  const assets = new Map<string, AssetMap>();

  assetsBlock.forEach((assetBlock: ContentfulAssets) => {
    const asset = {
      url: assetBlock.url,
      description: assetBlock.description,
      width: parseInt(assetBlock.width),
      height: parseInt(assetBlock.height)
    }

    assets.set(assetBlock.sys.id, asset);
  });

  return assets;
}

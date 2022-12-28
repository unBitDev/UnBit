import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types'
import { AssetMap, formatAssets } from './formatAsset';
import { styles } from './styles';

export const renderOptions = (links: any) => {
  const assetsMap: Map<string, AssetMap> = formatAssets(links.assets.block); 

  return {
    renderNode: {
      /* [BLOCKS.EMBEDDED_ENTRY]: (node: any, _: any) => {
        if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        } 
      }, */
      [BLOCKS.EMBEDDED_ASSET]: (node: any, _: any) => {
        const asset: AssetMap | undefined = assetsMap.get(node.data.target.sys.id);

        if(!asset) return <></>;

        return (
          <Image
            className={styles.imageRichText}
            src={asset.url}
            height={parseInt(asset.height)}
            width={parseInt(asset.width)}
            alt={asset.description}
            quality={75}
          />
        );
      },
    },
  }
};

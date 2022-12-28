import Image from 'next/image';
import Link from 'next/link';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { AssetMap, formatAssets } from './formatAsset';
import { styles } from './styles';
import Code from '../Code';

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
            height={500}
            width={500}
            alt={asset.description}
            quality={75}
          />
        );
      },
      [INLINES.HYPERLINK]: (node: any, _: any) => {
        return <Link href={node.data.uri}>{node.content[0].value}</Link>
      },
      [BLOCKS.PARAGRAPH]: (node: any, _: any) => {
        let renderNode = null;

        node.content.forEach((c: any) => {
          if(c.marks?.length > 0 && c.marks[0].type === 'code') renderNode = <Code code={node.content[0].value}/>;
          else renderNode = <p>{node.content[0].value}</p>
        })

        return renderNode;
      }
    }
  }
};

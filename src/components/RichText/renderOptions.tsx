import Image from 'next/image';
import Link from 'next/link';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { AssetMap, formatAssets } from './formatAsset';
import Code from '../Code';
import Table from '../Table';
import { ContentfulLinks } from '../../types/shared/contentful';

export const renderOptions = (links: ContentfulLinks) => {
  const assetsMap: Map<string, AssetMap> = formatAssets(links.assets.block); 

  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: any, children: any) => <h1 className="text-6xl font-bold">{children}</h1>,
      [BLOCKS.HEADING_2]: (_: any, children: any) => <h2 className="text-5xl font-bold">{children}</h2>,
      [BLOCKS.HEADING_3]: (_: any, children: any) => <h3 className="text-4xl font-bold">{children}</h3>,
      [BLOCKS.HEADING_4]: (_: any, children: any) => <h4 className="text-3xl font-bold">{children}</h4>,
      [BLOCKS.HEADING_5]: (_: any, children: any) => <h5 className="text-2xl font-bold">{children}</h5>,
      [BLOCKS.HEADING_6]: (_: any, children: any) => <h6 className="text-xl font-bold">{children}</h6>, 
      [BLOCKS.HR]: (_: any, __: any) => <hr className="my-2" />,
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

        if(!asset) return;

        return (
          <Image
            src={asset.url}
            height={asset.height}
            width={asset.width}
            alt={asset.description}
            quality={75}
          />
        );
      },
      [BLOCKS.TABLE]: (node: any, _: any) => {
        const heads: string[] = [];
        const body: string[][] = [];

        node.content.forEach((nodeContent: any) => {
          const bodyAux: string[] = [];
          nodeContent.content.forEach((content: any) => {
            if(content.nodeType === 'table-header-cell') heads.push(content.content[0].content[0].value);
            if(content.nodeType === 'table-cell') bodyAux.push(content.content[0].content[0].value);
          });
          
          if(bodyAux.length > 0) body.push(bodyAux);
        });

        return <Table heads={heads} body={body} />
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        let renderNode = null;

        node.content.forEach((c: any) => {
          if(c.marks?.length > 0 && c.marks[0].type === 'code') renderNode = <Code code={node.content[0].value}/>; 
          else {
            renderNode = <p>{children}</p>
          }
        });

        return renderNode;
      },
      [BLOCKS.UL_LIST]: (_: any, children: any) => <ul className="list-disc ml-6">{children}</ul>,
      [BLOCKS.OL_LIST]: (_: any, children: any) => <ol className="list-decimal ml-6">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (_: any, children: any) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node: any, children: any) => <Link className="font-bold italic hover:text-pink-400" href={node.data.uri}>{children}</Link>
    }
  }
};

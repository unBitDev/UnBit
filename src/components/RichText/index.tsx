import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContentfulLinks } from '../../types/shared/contentful';
import { renderOptions } from './renderOptions';

type RichTextProps = {
  content: any;
  links: ContentfulLinks;
}

const RichText = ({ content, links }: RichTextProps)=> <>{documentToReactComponents(content, renderOptions(links))}</>

export default RichText;

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from './renderOptions';

type RichTextProps = {
  content: any;
  links: any;
}

const RichText = ({ content, links }: RichTextProps) => <>{documentToReactComponents(content, renderOptions(links))}</>

export default RichText;

import highligth from 'highlight.js';
import { styles } from './styles';
import '../../../styles/components/code.modules.css'

type CodeProps = {
  code: string;
}

const Code = ({ code }: CodeProps) => {
  const highligthCode = highligth.highlightAuto(code).value;

  return (
    <pre className={styles.terminal}>
      <div className={styles.containerButtons}>
        <div className={styles.buttonClose} />
        <div className={styles.buttonMinimize} />
        <div className={styles.buttonMaximize}/>
      </div>
      
      <code dangerouslySetInnerHTML={{__html: highligthCode}} />
    </pre>
  ) 
}

export default Code;

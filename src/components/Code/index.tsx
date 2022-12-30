import highligth from 'highlight.js';
import { styles } from './styles';
import '../../../styles/components/code.modules.css'

type CodeProps = {
  code: string;
}

const Code = ({ code }: CodeProps) => {
  const highligthCode = highligth.highlightAuto(code).value;

  return (
    <div className={styles.terminal}>
        <div className={styles.containerButtons}>
          <span className={`${styles.button} ${styles.buttonClose}`}></span>
          <span className={`${styles.button} ${styles.buttonMinimize}`}></span>
          <span className={`${styles.button} ${styles.buttonMaximize}`}></span>
        </div>
        <pre className={styles.code}> 
          <code dangerouslySetInnerHTML={{__html: highligthCode}} />
        </pre>
    </div>
  ) 
}

export default Code;

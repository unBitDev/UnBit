import { interspersed, styles } from './styles';

type TableProps = {
  heads: string[];
  body: string[][];
}

const Table = ({ heads, body }: TableProps) => {
  return (
    <div className={styles.contentTable}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {heads.map((head: any, key: number) => (
              <th  key={key} scope="col" className="py-3 px-6">{head}</th>
            ))}  
          </tr>
        </thead>
        <tbody>
          {body.map((aux: string[], key: number) => (
            <tr key={key} className={interspersed(key)}>
              {aux.map((b: string, k: number) => ( 
                <td key={k} className="py-4 px-6 font-medium">{b}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;

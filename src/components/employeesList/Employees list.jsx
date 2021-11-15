import LetterBlock from './LetterBlock';

const EmployeesList = ({ data, error }) => {
      return (
        <>
            {error ? <p>Error</p> : 
            <div className="employees-block">
            <LetterBlock letter={'A'} data={data} />
            <LetterBlock letter={'B'} data={data} />
            <LetterBlock letter={'C'} data={data} />
            <LetterBlock letter={'D'} data={data} />
            <LetterBlock letter={'E'} data={data} />
            <LetterBlock letter={'F'} data={data} />
            <LetterBlock letter={'G'} data={data} />
            <LetterBlock letter={'H'} data={data} />
            <LetterBlock letter={'I'} data={data} />
            <LetterBlock letter={'J'} data={data} />
            <LetterBlock letter={'K'} data={data} />
            <LetterBlock letter={'L'} data={data} />
            <LetterBlock letter={'M'} data={data} />
            <LetterBlock letter={'N'} data={data} />
            <LetterBlock letter={'O'} data={data} />
            <LetterBlock letter={'P'} data={data} />
            <LetterBlock letter={'Q'} data={data} />
            <LetterBlock letter={'R'} data={data} />
            <LetterBlock letter={'S'} data={data} />
            <LetterBlock letter={'T'} data={data} />
            <LetterBlock letter={'U'} data={data} />
            <LetterBlock letter={'V'} data={data} />
            <LetterBlock letter={'W'} data={data} />
            <LetterBlock letter={'X'} data={data} />
            <LetterBlock letter={'Y'} data={data} />
            <LetterBlock letter={'Z'} data={data} />
            </div>
            }
        </>
    );
  }
  
  export default EmployeesList;
  
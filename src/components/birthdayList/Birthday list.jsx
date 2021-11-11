import Month from './Month';

const getBirthMonth = (value = 0) => {
  const date = new Date();
  const d = date.setMonth(date.getMonth() + value);
  return new Date(d).getMonth();
}

const BirthdayList = () => {
    return (
        <div className="birthday-list">
          <div className="header">Employees Birtday</div>
          <div className="months_of_birth">
            <Month month={getBirthMonth()} />
            <Month month={getBirthMonth(1)} />
            <Month month={getBirthMonth(2)} />
            <Month month={getBirthMonth(3)} />
            <Month month={getBirthMonth(4)} />
            <Month month={getBirthMonth(5)} />
            <Month month={getBirthMonth(6)} />
            <Month month={getBirthMonth(7)} />
            <Month month={getBirthMonth(8)} />
            <Month month={getBirthMonth(9)} />
            <Month month={getBirthMonth(10)} />
            <Month month={getBirthMonth(11)} />
          </div>
        </div>
    );
  }
  
  export default BirthdayList;
  
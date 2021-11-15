import { useAppContext } from '../../context/AppContext';

const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];

const Month = ({ month }) => {
    const state = useAppContext();
    const monthArray = state.activeList.filter((el) => new Date(el.dob).getMonth() === month);
    return (
        <div className="month">
            <div>{monthNames[month]}</div>
            {monthArray.length > 0 ?
                <>
                    {   monthArray.map((el) => {
                            return (
                                <div className="month_emp" key={el.id}>
                                    <input type="radio" defaultChecked />
                                    {el.firstName} {el.lastName}
                                </div> 
                            )
                        }) 
                    }
                </> :
                <div className="month_emp">No employees</div>
            }   
        </div>
    );
  }

  export default Month;
import { useAppContext } from '../../context/AppContext';
import PropTypes from 'prop-types';

const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
const options = {
    month: 'long'
  };

const getOwnDate = (date) => {
    const d1 = new Date(date);
    return(d1.getDate() + " " + d1.toLocaleString("en-US", options) + "," + d1.getFullYear() + " year");
}

const Month = ({ month }) => {
    const state = useAppContext();
    const monthArray = state.activeList.filter((el) => new Date(el.dob).getMonth() === month);

    return (
        <div className="month">
            <div className="month_name">{monthNames[month]}</div>
            {monthArray.length > 0 ?
                <>
                    {   monthArray.map((el) => {
                            return (
                                <div className="month_block" key={el.id}>
                                    <div className="month-circle"></div>
                                    {el.firstName} {el.lastName} - {getOwnDate(el.dob)}
                                </div> 
                            )
                        }) 
                    }
                </> :
                <div className="month_empty_block">No employees</div>
            }   
        </div>
    );
}

Month.propTypes = {
    month: PropTypes.number.isRequired
}

export default Month;
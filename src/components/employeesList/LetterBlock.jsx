import { useToggleActive, useToggleNotActive, useAppContext } from '../../context/AppContext';
import PropTypes from 'prop-types';

const LetterBlock = ({ letter, data }) => {
    const letterData = data.filter((el) => el.firstName.toLowerCase().substr(0, 1) === letter.toLocaleLowerCase());

    const toggleActive = useToggleActive();
    const toggleNotActive = useToggleNotActive();
    const state = useAppContext();


    return (
        <div className="letter_container">
            <div className="letter">{letter}</div>
                {letterData.length > 0 ? 
                    <div className="letter_block">
                        {letterData.map((el) => {
                            return(
                                <div className="employee" key={el.id}>
                                    <div className={state.activeList.includes(el) ? "fullName_active" : "fullName_not-active"}>{el.firstName} {el.lastName}</div>
                                    <div>
                                        <input type="radio" id="not-active" checked={!state.activeList.includes(el)} onChange={() => toggleNotActive(el)} />
                                        <label className="radio_label" htmlFor="not-active">not active</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="active" checked={state.activeList.includes(el)}  onChange={() => toggleActive(el)} />
                                        <label className="radio_label" htmlFor="active">active</label>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div> : 
                    <div className="letter-block">
                        <p>No Employees</p>
                    </div>  
                }            
            </div>
    );
}

LetterBlock.propTypes = {
    letter: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}
  
export default LetterBlock;
  
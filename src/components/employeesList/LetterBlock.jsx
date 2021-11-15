import { useToggleActive, useToggleNotActive, useAppContext } from '../../context/AppContext';

const LetterBlock = ({ letter, data }) => {
    const letterData = data.filter((el) => el.firstName.toLowerCase().substr(0, 1) === letter.toLocaleLowerCase());

    const toggleActive = useToggleActive();
    const toggleNotActive = useToggleNotActive();
    const state = useAppContext();


    return (
        <div className="letter-container">
            <div className="letter">{letter}</div>
                {letterData.length > 0 ? 
                    <div className="letter-block">
                        {letterData.map((el) => {
                            return(
                                <div className="employee" key={el.id}>
                                    <div className="fullName">{el.firstName} {el.lastName}</div>
                                    <div>
                                        <input type="radio" id="not-active" checked={!state.activeList.includes(el)} onChange={() => toggleNotActive(el)} />
                                        <label className="label" htmlFor="not-active">not active</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="active" checked={state.activeList.includes(el)}  onChange={() => toggleActive(el)} />
                                        <label className="label" htmlFor="active">active</label>
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
  
  export default LetterBlock;
  
import {useAppContext} from "../../context/AppContext"
import {prop, sortWith, ascend} from "ramda"
import PropTypes from "prop-types"
import EmployeeBlock from "./EmployeeBlock"

const letterDataSort = sortWith([ascend(prop("firstName"))])

const LetterBlock = ({letter}) => {
  const state = useAppContext()
  const letterData = state.employeesList.filter(
    el => el.firstName.toLowerCase().substr(0, 1) === letter.toLowerCase(),
  )

  return (
    <div className="letter_container">
      <div className="letter">{letter}</div>
      {letterData.length > 0 ? (
        <div className="letter_block">
          {letterDataSort(letterData).map(el => (
            <EmployeeBlock employee={el} key={el.id} />
          ))}
        </div>
      ) : (
        <div className="letter-block">
          <p>No Employees</p>
        </div>
      )}
    </div>
  )
}

LetterBlock.propTypes = {
  letter: PropTypes.string.isRequired,
}

export default LetterBlock

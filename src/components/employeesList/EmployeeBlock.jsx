import {
  useToggleActive,
  useToggleNotActive,
  useAppContext,
} from "../../context/AppContext"
import PropTypes from "prop-types"

const EmployeeBlock = ({employee}) => {
  const toggleActive = useToggleActive()
  const toggleNotActive = useToggleNotActive()
  const state = useAppContext()
  const isActive = state.checkedList.includes(employee.id)

  return (
    <div className="employee">
      <div className={isActive ? "fullName_active" : "fullName_not-active"}>
        {employee.firstName} {employee.lastName}
      </div>
      <div>
        <input
          type="radio"
          id="not-active"
          checked={!isActive}
          onChange={() => toggleNotActive(employee)}
        />
        <label className="radio_label" htmlFor="not-active">
          not active
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="active"
          checked={isActive}
          onChange={() => toggleActive(employee)}
        />
        <label className="radio_label" htmlFor="active">
          active
        </label>
      </div>
    </div>
  )
}

EmployeeBlock.propTypes = {
  employee: PropTypes.object.isRequired,
}

export default EmployeeBlock

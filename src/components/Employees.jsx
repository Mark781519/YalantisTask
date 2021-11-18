import {useEffect} from "react"
import EmployeesList from "../components/employeesList/Employees list"
import BirthdayList from "./birthdayList/Birthday list"
import {useLoadEmployees, useAppContext} from "../context/AppContext"
import useLocalStorage from "../hooks/useLocalStorage"
import "./Employees.css"

const Employees = () => {
  const state = useAppContext()
  const loadEmployees = useLoadEmployees()
  const storageData = useLocalStorage("CACHED_DATA")
  const [, setCachedData] = storageData

  useEffect(() => {
    setCachedData(state)
  }, [setCachedData, state])

  useEffect(() => {
    loadEmployees()
  }, [loadEmployees])

  return (
    <div className="employees_container">
      <div className="employees_list">
        <div className="header">Employees</div>
        {state.spiner ? <p>Loading...</p> : <EmployeesList />}
      </div>

      <div className="birthday_list">
        <div className="header">Employees Birtday</div>
        <BirthdayList />
      </div>
    </div>
  )
}

export default Employees

import { useEffect } from 'react';
import EmployeesList from '../components/employeesList/Employees list';
import BirthdayList from './birthdayList/Birthday list';
import './Employees.css';
import { useLoadEmployees, useAppContext } from '../context/AppContext';
  
  const Employees = () => {
    const state = useAppContext();
    const loadEmployees = useLoadEmployees();


    useEffect(() => {
            loadEmployees();
      }, [loadEmployees]);
  
        return (
            <div className="employees-container">
                <div className="employees-list">
                    <div className="header">Employees</div>
                    {state.spiner ? <p>Loading...</p> : 
                        <EmployeesList data={state.employeesList} error={state.error} />
                    }
                </div>
                
                <div className="birthday-list">
                    <div className="header">Employees Birtday</div>
                    <BirthdayList />
                </div>
          </div>
      );
    }
    
    export default Employees;
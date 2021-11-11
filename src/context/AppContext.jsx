import { useReducer, createContext, useContext } from "react";
import axios from "axios";

async function getUsers() {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://yalantis-react-school-api.yalantis.com/api/task0/users',
        responseType: 'stream'
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();


const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
    birthdayList: [],
    employeesList: [],
    wishlist: [],
}

function reducer(state, action) {
    switch (action.type) {
        case "chooseEmployee":
            return {
                ...state,

            }
        
        default:
            throw Error("something went wrong");
    }
}

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
        );
}

export const  useAppContext = () => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw Error("useAppContext must be called within AppContext");
    }
    return context;
}
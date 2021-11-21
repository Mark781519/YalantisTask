import LetterBlock from "./LetterBlock"
import {useAppContext} from "../../context/AppContext"

const EmployeesList = () => {
  const state = useAppContext()

  return (
    <>
      {state.error ? (
        <p>Something went wrong....</p>
      ) : (
        <div className="employees_block">
          <LetterBlock letter={"A"} />
          <LetterBlock letter={"B"} />
          <LetterBlock letter={"C"} />
          <LetterBlock letter={"D"} />
          <LetterBlock letter={"E"} />
          <LetterBlock letter={"F"} />
          <LetterBlock letter={"G"} />
          <LetterBlock letter={"H"} />
          <LetterBlock letter={"I"} />
          <LetterBlock letter={"J"} />
          <LetterBlock letter={"K"} />
          <LetterBlock letter={"L"} />
          <LetterBlock letter={"M"} />
          <LetterBlock letter={"N"} />
          <LetterBlock letter={"O"} />
          <LetterBlock letter={"P"} />
          <LetterBlock letter={"Q"} />
          <LetterBlock letter={"R"} />
          <LetterBlock letter={"S"} />
          <LetterBlock letter={"T"} />
          <LetterBlock letter={"U"} />
          <LetterBlock letter={"V"} />
          <LetterBlock letter={"W"} />
          <LetterBlock letter={"X"} />
          <LetterBlock letter={"Y"} />
          <LetterBlock letter={"Z"} />
        </div>
      )}
    </>
  )
}

export default EmployeesList

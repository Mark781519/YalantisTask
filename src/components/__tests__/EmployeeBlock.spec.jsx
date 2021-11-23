import {render, screen, fireEvent} from "@testing-library/react"
import EmployeeBlock from "../employeesList/EmployeeBlock"
import {AppStateProvider} from "../../context/AppContext"

const employee = {
  id: 1,
  firstName: "Jon",
  lastName: "Dou",
  dob: 25,
}

const mockToggleActive = jest.fn()
const mockToggleNotActive = jest.fn()

jest.mock("../../context/AppContext", () => ({
  ...jest.requireActual("../../context/AppContext"),
  useToggleActive: () => mockToggleActive,
  useToggleNotActive: () => mockToggleNotActive,
}))

test("should correct render EmployeeBlock", () => {
  render(
    <AppStateProvider>
      <EmployeeBlock employee={employee} key={employee.id} />
    </AppStateProvider>,
  )

  const fullNameEl = screen.getByText("Jon Dou")
  expect(fullNameEl).toHaveClass("fullName_not-active")

  const activeEl = screen.getByLabelText("active")
  expect(activeEl).toHaveAttribute("type", "radio")
  expect(activeEl).not.toBeChecked()

  const notActiveEl = screen.getByLabelText("not active")
  expect(notActiveEl).toHaveAttribute("type", "radio")
  expect(notActiveEl).toBeChecked()

  fireEvent.click(activeEl)
  expect(mockToggleActive).toHaveBeenCalledTimes(1)
  expect(mockToggleActive).toHaveBeenCalledWith(employee)
})

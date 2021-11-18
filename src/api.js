import axios from "axios"

async function getData() {
  try {
    const response = await axios({
      method: "get",
      url: "https://yalantis-react-school-api.yalantis.com/api/task0/users",
    })
    return response.data
  } catch (error) {
    return "error"
  }
}

export default getData

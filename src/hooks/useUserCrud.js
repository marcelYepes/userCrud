import axios from "axios"
import {useState} from "react"
import {URL_API} from "../../url"

const useUserCrud = () => {
  const [users, setUsers] = useState()
  const url = URL_API.url
  const getAllUsers = () => {
    axios
      .get(`${url}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createNewUser = data => {
    axios
      .post(`${url}/users`, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const urlDelete = `${url}/users/${id}`
    axios
      .delete(urlDelete)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const urlUpdate = `${url}/users/${id}`
    axios
      .put(urlUpdate, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  return {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById,
  }
}

export default useUserCrud

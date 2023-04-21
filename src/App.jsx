
import { useEffect, useState} from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
 
const {
  users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
}
  = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div className="App">
      <h1>Users</h1>
      <FormUser 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
      />
      <div>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            />
            
          ))
        }
        
      </div>
        
    </div>
  )
}

export default App

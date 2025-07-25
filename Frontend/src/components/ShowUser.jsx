import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const ShowUser = () => {

    const [userData, setUserData] = useState([])

    const fetchData = async () =>{
      await  axios.get(`http://127.0.0.1:4500/user/showUsers`)

        .then((res) => {
            setUserData(res.data.showUser)
            console.log(res)
        })

        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    },[])
    

    const deleteHandler = async (id) =>{
        setUserData(userData.filter((user) => user._id !== id))

        await axios.delete(`http://127.0.0.1:4500/user/delete/${id}`)

          .then((res) => {
            console.log("User Deleted Succesfully")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const navigate = useNavigate()

  return (
      <>
          <div className='h-full flex justify-center items-center gap-5'>
             {
                userData.map((userData, idx)=>{
                    return <div key={idx} className='w-[15rem] h-[20rem] border border-black rounded-3xl '>

                        <div className='flex justify-center'>
                            <img className='w-[100px] h-[100px] rounded-full mt-5' src={userData.image} alt="" />
                        </div>

                        <div className='mt-5 ml-4'>
                            <p>Email: {userData.email}</p>
                            <p>Age: {userData.age}</p>
                            <p>Bio: {userData.bio}</p>
                        </div>

                        <div className='flex justify-around mt-10'>
                            <button onClick={()=> navigate(`/update/${userData._id}`)} className='border border-gray-600 rounded cursor-pointer px-2 py-1'>Edit</button>
                            <button onClick={() => {deleteHandler(userData._id)}} className='border border-gray-600 rounded cursor-pointer px-2 py-1'>Delete</button>
                        </div>
                    </div>
                })
             }
        </div>
      </>
  )
}

export default ShowUser
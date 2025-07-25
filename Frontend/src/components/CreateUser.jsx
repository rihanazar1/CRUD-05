import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [bio, setBio] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post(`http://127.0.0.1:4500/user/register`, {image, name, email, age, bio})

        .then((res)=>{
            console.log(res.data)
        })

        .catch((err)=>{
            console.log(err)
        })

        setImage("")
        setName("")
        setEmail("")
        setAge("")
        setBio("")
    }

  return (
    <>
        <div className='h-full w-full flex justify-center items-center'>
        <div className='w-[17rem] h-[18rem] flex justify-center border border-gray-400 rounded-2xl'>
            <form onSubmit={(e)=>submitHandler(e)}>

                <div>
                    <input 
                    className='border border-gray-400 rounded mt-3 py-1'
                    placeholder='enter image'
                    value={image}
                    onChange={(event)=>{
                        setImage(event.target.value)
                        console.log(event.target.value)
                    }}
                    type="text"/>
                </div>
                <div>
                    <input 
                    className='border border-gray-400 rounded mt-3 py-1'
                    placeholder='enter name'
                    value={name}
                    onChange={(event)=>{
                        setName(event.target.value)
                        console.log(event.target.value)
                    }}
                    type="text"/>
                </div>
                <div>
                    <input 
                    className='border border-gray-400 rounded mt-3 py-1'
                    placeholder='enter email'
                    value={email}
                    onChange={(event)=>{
                        setEmail(event.target.value)
                        console.log(event.target.value)
                    }}
                    type="text"/>
                </div>
                <div>
                    <input 
                    className='border border-gray-400 rounded mt-3 py-1'
                    placeholder='enter age'
                    value={age}
                    onChange={(event)=>{
                        setAge(event.target.value)
                        console.log(event.target.value)
                    }}
                    type="number"/>
                </div>
                <div>
                    <input 
                    className='border border-gray-400 rounded mt-3 py-1'
                    placeholder='enter bio'
                    value={bio}
                    onChange={(event)=>{
                        setBio(event.target.value)
                        console.log(event.target.value)
                    }}
                    type="text"/>
                </div>


                <div className='flex justify-center'>
                    <button className='cursor-pointer border border-gray-400 mt-2'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    </>
  )
}

export default CreateUser
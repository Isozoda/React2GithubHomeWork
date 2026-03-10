import React from 'react'
import { useParams } from 'react-router-dom'
import { ToDoList } from '../store/ToDoList'

const Info = () => {

  const { id } = useParams()
  const { data } = ToDoList()

  const user = data.find((e: any) => e.id == id)

  return (
    <div className="min-h-[100vh] bg-gray-100 flex items-center justify-center">
      {user && (
        <div className="bg-white shadow-xl rounded-2xl w-[500px] p-8">

          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
              {user.name.slice(0, 1)}
            </div>
            <h2 className="text-2xl font-bold mb-5 mt-5">{user.name}</h2>
            <div className='mt-2 px-3 py-1 text-sm rounded-full'>
              {user.status && (
                <span className='bg-green-100 px-3 py-1 rounded-full font-semibold text-green-600'>Active</span>
              )}
              {!user.status && (
                <span className='bg-red-100 px-3 py-1 rounded-full font-semibold text-red-600'>InActive</span>
              )}
            </div>
          </div>
          <div className="space-y-4">

            <div className="flex justify-between border-b border-b-gray-400 pb-4">
              <span className="font-bold text-gray-900">Age</span>
              <span>{user.age}</span>
            </div>

            <div className="flex justify-between border-b border-b-gray-400 pb-5">
              <span className="font-semibold text-gray-900">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between border-b border-b-gray-400 pb-5">
              <span className="font-semibold text-gray-900">Phone</span>
              <span>{user.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-gray-900">ID</span>
              <span>{user.id}</span>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Info
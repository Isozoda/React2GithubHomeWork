import React, { useState } from 'react'
import { useToDo } from './store/todo'
import { Button, Input, Modal, Select } from 'antd'
import { useFormik } from 'formik'

interface IData {
  name: string,
  age: string,
  email: string,
  phone: string,
  status: boolean,
  id: number
}

const App = () => {
  let { data, deleteUser, addUser, editUser, changeStatus } = useToDo()

  const { handleSubmit, handleChange, values, setFieldValue, resetForm } = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      phone: "",
    },
    onSubmit: (value) => {
      if (idx) {
        editUser({ id: idx, status, ...value })
        resetForm()
        setIdx(null)
        handleCancelE()
      } else {
        addUser(value)
        resetForm()
        handleCancel()
      }
    }
  })

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // edit

  const [idx, setIdx] = useState(null)
  const [isModalOpenE, setIsModalOpenE] = useState(false);

  const showModalE = () => {
    setIsModalOpenE(true);
  };

  const handleOkE = () => {
    setIsModalOpenE(false);
  };

  const handleCancelE = () => {
    setIsModalOpenE(false);
  };

  const handleEdit = (e) => {
    setIdx(e.id)
    setFieldValue("name", e.name)
    setFieldValue("age", e.age)
    setFieldValue("phone", e.phone)
    setFieldValue("email", e.email)
  }

  // search

  let [search, setSearch] = useState("")

  // select

  let [select, setSelect] = useState("")

  // info

  const [isModalOpenInfo, setIsModalOpenInfo] = useState(false);

  const [infoUser, setINfoUser] = useState<IData | null>(null)

  const showModalInfo = () => {
    setIsModalOpenInfo(true);
  };

  const handleOkInfo = () => {
    setIsModalOpenInfo(false);
  };

  const handleCancelInfo = () => {
    setIsModalOpenInfo(false);
  };

  return (
    <div className='w-[90%] m-auto'>
      <h1 className='my-10 text-4xl font-bold mb-12'>User List</h1>
      <div className='flex gap-100 mb-7 items-center'>
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
        <Select
          value={select}
          onChange={(e) => setSelect(e)}
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="Select a person"
          options={[
            { value: '', label: 'All Users' },
            { value: 'true', label: 'Active Users' },
            { value: 'false', label: 'InActive Users' },
          ]}
        />
        <Button onClick={showModal} type='primary'>Add New User</Button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Age</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((e: any) => e.status.toString().includes(select)).filter((e: any) => e.name.toLowerCase().includes(search.toLowerCase())).map((e: IData) => (
              <tr
                key={e.id}
                className="border-b border-b-gray-100 hover:bg-gray-200 transition">
                <td className="p-4 font-semibold">{e.name}</td>
                <td className="p-4">{e.age}</td>
                <td className="p-4 text-blue-600">{e.email}</td>
                <td className="p-4">{e.phone}</td>
                <td className="p-4">
                  {e.status && (
                    <span className="bg-green-100 font-bold text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  )}
                  {!e.status && (
                    <span className="bg-red-100 font-bold text-red-700 px-3 py-1 rounded-full text-sm">
                      InActive
                    </span>
                  )}
                </td>
                <td className="p-4 flex items-center justify-center gap-5">
                  <svg onClick={() => deleteUser(e.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <svg onClick={() => {
                    showModalE()
                    handleEdit(e)
                  }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <svg onClick={() => {
                    setINfoUser(e)
                    showModalInfo()
                  }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <input type="checkbox" onClick={() => changeStatus(e.id)} className='w-3.5 h-3.5' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="Edit Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenE}
        onOk={handleOkE}
        onCancel={handleCancelE}
        footer={null}
      >
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <Input value={values.name} onChange={handleChange} name='name' placeholder="Name" />
          <Input value={values.age} onChange={handleChange} name='age' placeholder="Age" />
          <Input value={values.phone} onChange={handleChange} name='phone' placeholder="Phone" />
          <Input value={values.email} onChange={handleChange} name='email' placeholder="Email" />
          <button type='submit' className='bg-green-500 font-semibold text-white py-1.5 rounded-xl'>UpDate</button>
        </form>
      </Modal>
      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <Input value={values.name} onChange={handleChange} name='name' placeholder="Name" />
          <Input value={values.age} onChange={handleChange} name='age' placeholder="Age" />
          <Input value={values.phone} onChange={handleChange} name='phone' placeholder="Phone" />
          <Input value={values.email} onChange={handleChange} name='email' placeholder="Email" />
          <button type='submit' className='bg-blue-500 font-semibold text-white py-1.5 rounded-xl'>Save</button>
        </form>
      </Modal>
      <Modal
        title="User Info"
        open={isModalOpenInfo}
        onCancel={handleCancelInfo}
        footer={null}
      >
        {infoUser && (
          <div className="flex flex-col gap-3">
            <p><b>Name:</b> {infoUser.name}</p>
            <p><b>Age:</b> {infoUser.age}</p>
            <p><b>Email:</b> {infoUser.email}</p>
            <p><b>Phone:</b> {infoUser.phone}</p>
            <p>
              <b>Status:</b> {infoUser.status ? "Active" : "InActive"}
            </p>
          </div>
        )}
      </Modal>
    </div >
  )
}

export default App

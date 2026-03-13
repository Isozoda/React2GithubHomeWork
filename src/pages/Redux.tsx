import { useState } from 'react'
import { Button, Input, Modal, Select } from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, changeStatus, deleteUser, editUser } from '../reducers/toDoList';


interface IUser {
  name: string,
  age: number,
  email: string,
  phone: string,
  status: boolean,
  id: number
}

const Jotai = () => {

  const { data } = useSelector((store) => store.counter)
  const dispatch = useDispatch()


  // seaerch

  let [search, setSearch] = useState("")

  // select

  let [select, setSelect] = useState("")

  // add

  const { handleChange, resetForm, handleSubmit, setFieldValue, values } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      email: "",
      phone: "",
      status: false
    },
    onSubmit: (value) => {
      if (idx) {
        dispatch(editUser({ id: idx, ...value, status: false }))
        handleCancelE()
        resetForm()
      } else {
        dispatch(addUser(value))
        handleCancel()
        resetForm()
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

  const handleEdit = (e: any) => {
    setIdx(e.id)
    setFieldValue("name", e.name)
    setFieldValue("age", e.age)
    setFieldValue("email", e.email)
    setFieldValue("phone", e.phone)
  }

  return (
    <div className='w-[80%] m-auto'>
      <h1 className='font-bold text-4xl my-10'>Users List with Redax</h1>
      <div className='flex mb-15 items-center gap-80'>
        <Input.Search value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Filled" variant="filled" />
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
            { value: 'false', label: 'Inactive Users' },
          ]}
        />
        <Button onClick={showModal} type='primary'>Add New User</Button>
      </div>
      <table className='w-full text-center shadow-2xl rounded-4xl'>
        <thead className='bg-blue-900 text-white'>
          <th className='py-4'>Name</th>
          <th className='py-4'>Age</th>
          <th className='py-4'>Email</th>
          <th className='py-4'>Phone</th>
          <th className='py-4'>Status</th>
          <th className='py-4'>Action</th>
        </thead>
        <tbody className='py-4'>
          {data.filter((e: any) => e.status.toString().includes(select)).filter((e: any) => e.name.toLowerCase().includes(search.toLowerCase())).map((e: IUser) => {
            return <tr className='py-4 border-b border-b-blue-100 hover:bg-blue-100' key={e.id}>
              <td className='py-4 w-[25%] font-bold'>{e.name}</td>
              <td className='py-4 font-semibold'>{e.age}</td>
              <td className='py-4 w-[23%] font-semibold text-blue-600'>{e.email}</td>
              <td className='py-4 font-semibold text-gray-600 '>{e.phone}</td>
              <td>
                {e.status && (
                  <p className='font-bold text-green-600'>Active</p>
                )}
                {!e.status && (
                  <p className='font-bold text-red-600'>InActive</p>
                )}
              </td>
              <td>
                <div className='flex justify-center items-center gap-3'>
                  <svg onClick={() => dispatch(deleteUser(e.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <svg onClick={() => {
                    showModalE(),
                      handleEdit(e)
                  }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <input onClick={() => dispatch(changeStatus(e.id))} type="checkbox" className='w-3.5 h-3.5' />
                </div>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5'>
          <Input name='name' value={values.name} onChange={handleChange} placeholder='Name' />
          <Input name='age' value={values.age} onChange={handleChange} placeholder='Age' />
          <Input name='email' value={values.email} onChange={handleChange} placeholder='Email' />
          <Input name='phone' value={values.phone} onChange={handleChange} placeholder='Phone' />
          <button className='w-full py-1.5 bg-blue-600 text-white font-bold rounded-xl' type='submit'>Save</button>
        </form>
      </Modal>
      <Modal
        title="Edit Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenE}
        onOk={handleOkE}
        onCancel={handleCancelE}
        footer={null}
      >
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5'>
          <Input name='name' value={values.name} onChange={handleChange} placeholder='Name' />
          <Input name='age' value={values.age} onChange={handleChange} placeholder='Age' />
          <Input name='email' value={values.email} onChange={handleChange} placeholder='Email' />
          <Input name='phone' value={values.phone} onChange={handleChange} placeholder='Phone' />
          <button className='w-full py-1.5 bg-blue-600 text-white font-bold rounded-xl' type='submit'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default Jotai

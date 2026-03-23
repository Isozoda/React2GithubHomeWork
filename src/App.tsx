import { Button, Input, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';
import { ToDoListZustand, type IData } from './store/toDOZustand';
import { useForm } from "react-hook-form"

const App = () => {

  const { data, GetData, DeleteUser, SearchUser, SelectUser, AddUsers, EditUser }: any = ToDoListZustand()

  useEffect(() => {
    GetData()
  }, [])

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

  const [idx, setIdx] = useState(null)

  const { register, setValue, reset, handleSubmit } = useForm()

  const onsubmit = (value: any) => {
    if (idx) {
      EditUser({ id: idx, ...value })
      handleCancelE(),
        reset()
    } else {
      AddUsers(value)
      handleCancel(),
        reset()
    }
  }

  const handleEdit = (e: any) => {
    setIdx(e.id),
      setValue("name", e.name)
    setValue("age", e.age)
    setValue("email", e.email)
    setValue("phone", e.phone)
    setValue("image", e.image)
  }

  return (
    <div className="w-[90%] m-auto my-5">
      <h1 className="font-bold text-4xl my-5">Users List</h1>
      <div className="flex items-center justify-between my-10">
        <Input onChange={(e) => SearchUser(e.target.value)} style={{ width: "300px" }} placeholder="Search user...." />
        <Select
          onChange={(e) => SelectUser(e)}
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
          }}
          placeholder="filter by status person"
          options={[
            { value: '', label: 'All Users' },
            { value: 'true', label: 'Active' },
            { value: 'false', label: 'Inactive' },
          ]}
        />
        <Button onClick={showModal} type='primary'>+ Add New User</Button>
      </div>
      <div className='grid grid-cols-4 gap-10 my-10'>
        {data.map((e: IData) => {
          return <div key={e.id} className='shadow text-center hover:shadow-2xl transition p-5 rounded-xl'>
            <img className='w-full h-50 rounded-xl mb-3' src={e.image} alt="" />
            <h1 className='font-bold text-xl mb-2'>{e.name}</h1>
            <h1 className='font-semibold text-gray-600 mb-2'>{e.age}</h1>
            <h1 className='font-semibold text-blue-500 mb-2'>{e.email}</h1>
            <h1 className='font-semibold text-gray-500 mb-2'>{e.phone}</h1>
            {e.status && (
              <p className='font-bold text-green-500 text-lg mb-2'>Active</p>
            )}
            {!e.status && (
              <p className='font-bold text-red-500 text-lg mb-2'>InActive</p>
            )}
            <div className='flex justify-center items-center gap-5'>
              <svg onClick={() => DeleteUser(e.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <svg onClick={() => {
                showModalE(),
                  handleEdit(e)
              }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <input checked={e.status} onChange={() => EditUser({ ...e, status: !e.status })} type="checkbox" className='w-3.5 h-3.5' />
            </div>
          </div>
        })}
      </div>
      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenE}
        onOk={handleOkE}
        onCancel={handleCancelE}
        footer={null}
      >
        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3.5'>
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Image' {...register("image", { required: true, maxLength: 100 })} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Age' {...register("age", { required: true, maxLength: 100 })} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Email' {...register("email", { required: true, maxLength: 60 })} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Phone' {...register("phone", { required: true, maxLength: 9 })} />
          <button type='submit' className='bg-blue-500 text-white py-1.5 w-full rounded-xl'>Save</button>
        </form>
      </Modal>
      <Modal
        title="Edit Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-3.5'>
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Name' {...register("name")} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Image' {...register("image")} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Age' {...register("age")} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Email' {...register("email")} />
          <input className='py-1.5 px-3.5 rounded-xl w-full border border-gray-300 outline-blue-600' placeholder='Phone' {...register("phone")} />
          <button type='submit' className='bg-blue-500 text-white py-1.5 w-full rounded-xl'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default App

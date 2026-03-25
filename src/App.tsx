import { Button, Modal } from 'antd'
import { ToDoZustand } from './store/toDoZustand'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const apiImage = "http://37.27.29.18:8001/images";

const App = () => {
  const { data, GetData, DeleteUser, CheckStatus, AddNewUser, EditUser, DeleteImage, AddImage }: any = ToDoZustand()
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

  const [isModalOpenAddImage, setIsModalOpenAddImage] = useState(false);

  const showModalAddImage = () => {
    setIsModalOpenAddImage(true);
  };

  const handleOkAddImage = () => {
    setIsModalOpenAddImage(false);
  };

  const handleCancelAddImage = () => {
    setIsModalOpenAddImage(false);
  };

  const [isModalOpenE, setIsModalOpenE] = useState(false);

  const [idx, setIdx] = useState(null)

  const showModalE = () => {
    setIsModalOpenE(true);
  };

  const handleOkE = () => {
    setIsModalOpenE(false);
  };

  const handleCancelE = () => {
    setIsModalOpenE(false);
  };

  const { register, handleSubmit, reset, setValue } = useForm()

  const onsubmit = (value: any) => {
    if (idx) {
      EditUser({ id: idx, ...value })
      handleCancelE()
      reset()
    } else {
      const formData = new FormData();
      formData.append("name", value.name)
      formData.append("description", value.description)
      for (let i = 0; i < value.images.length; i++) {
        formData.append("Images", value.images[i])
      }
      AddNewUser(formData)
      handleCancel()
      reset()
    }
  }

  const onsubmitImage = (value: any) => {
    const formData = new FormData();
    for (let i = 0; i < value.images.length; i++) {
      formData.append("Images", value.images[i])
    }
    AddImage(formData, idx)
    handleOkAddImage()
  }

  const handleEdit = (e: any) => {
    setIdx(e.id)
    setValue("name", e.name)
    setValue("description", e.description)
  }

  return (
    <div className='w-[80%] m-auto my-7'>
      <div className='flex items-center mb-8 justify-between'>
        <h1 className='font-bold text-4xl'>Users List</h1>
        <Button onClick={showModal} type='primary'> + Add New User</Button>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {data.map((e: any) => {
          return <div key={e.id} className='shadow p-6 rounded-xl hover:shadow-2xl hover:rounded-4xl transition'>
            <div className=''>
              {e.images.map((img: any) => {
                return <div key={img.id} className=''>
                  <img className='w-full h-60 rounded-xl' src={`${apiImage}/${img.imageName}`} alt="" />
                  <Button className='my-2' onClick={() => DeleteImage(img.id)}>Del Img</Button>
                </div>
              })}
              <Button type='primary' className='my-3' onClick={() => {
                showModalAddImage()
                setIdx(e.id)
              }}>Add Img</Button>
            </div>
            <div className='flex items-center my-2 w-[93%] m-auto justify-between'>
              <h1 className='font-bold text-lg'>Name: </h1>
              <h1 className='font-semibold'>{e.name}</h1>
            </div>
            <h1 className='text-gray-800 font-semibold my-3 mb-4 w-[95%] m-auto' >{e.description}</h1>
            {e.isCompleted && (
              <p className='font-bold text-center bg-green-100 my-3 py-1.5 rounded-xl w-[50%] m-auto text-green-500'>Active</p>
            )}
            {!e.isCompleted && (
              <p className='font-bold text-center bg-red-100 my-3 py-1.5 rounded-xl w-[50%] m-auto text-red-500'>InActive</p>
            )}
            <div className='flex items-center justify-center gap-5'>
              <svg onClick={() => DeleteUser(e.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              <svg onClick={() => {
                showModalE()
                handleEdit(e)
              }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <input checked={e.isCompleted}
                onChange={() => CheckStatus(e.id)}
                type="checkbox" className='w-4 h-4'
              />
            </div>
          </div>
        })}
      </div>
      <Modal
        title="Add Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-4'>
          <input type="text" {...register("name")} placeholder='Name' className='w-full py-1.5 border border-gray-300 rounded-xl px-4 outline-blue-500' />
          <input type="text" {...register("description")} placeholder='Description' className='w-full py-1.5 border border-gray-300 rounded-xl px-4 outline-blue-500' />
          <input {...register("images")} className='w-[90%] m-auto' type="file" multiple />
          <button type='submit' className='w-full py-1.5 rounded-xl bg-blue-500 text-white'>Save</button>
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
        <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col gap-4'>
          <input type="text" {...register("name")} placeholder='Name' className='w-full py-1.5 border border-gray-300 rounded-xl px-4 outline-blue-500' />
          <input type="text" {...register("description")} placeholder='Description' className='w-full py-1.5 border border-gray-300 rounded-xl px-4 outline-blue-500' />
          <button type='submit' className='w-full py-1.5 rounded-xl bg-blue-500 text-white'>Save</button>
        </form>
      </Modal>
      <Modal
        title="Add Image"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenAddImage}
        onOk={handleOkAddImage}
        onCancel={handleCancelAddImage}
        footer={null}
      >
        <form onSubmit={handleSubmit(onsubmitImage)} className='flex flex-col gap-4'>
          <input {...register("images")} className='w-[90%] m-auto' type="file" multiple />
          <button type='submit' className='w-full py-1.5 rounded-xl bg-blue-500 text-white'>Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default App

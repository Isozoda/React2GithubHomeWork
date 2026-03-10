import React, { useState } from 'react'
import { ToDoList } from '../store/ToDoList'
import { Button, Input, Modal, Select } from 'antd';
import { useFormik } from 'formik';
import { Link } from 'react-router';
import Search from 'antd/es/transfer/search';

interface IData {
    name: string,
    age: string,
    status: boolean,
    email: string,
    phone: string,
    id: number
}

const Home = () => {
    const { data, deleteUser, addUser, editUser, changeStatus } = ToDoList()

    const { handleChange, resetForm, setFieldValue, values, handleSubmit, } = useFormik({
        initialValues: {
            name: "",
            age: "",
            phone: "",
            email: "",
            status: false
        },
        onSubmit: (value) => {
            if (idx) {
                editUser({ id: idx, ...value })
                handleCancelE()
                resetForm()
            }
            else {
                addUser(value)
                handleCancel()
                resetForm()
            }
        }
    })

    //add

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

    //edit

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

    const handleEdit = (e) => {
        setIdx(e.id)
        setFieldValue("name", e.name)
        setFieldValue("age", e.age)
        setFieldValue("email", e.email)
        setFieldValue("phone", e.phone)
    }

    // search

    const [search, setSearch] = useState("")

    // select

    const [select, setSelect] = useState("")

    return (
        <div className='w-[80%] my-10 m-auto'>
            <h1 className='text-4xl font-bold mb-8'>User Table</h1>
            <div className='flex gap-80 mb-10 items-center justify-between'>
                <Search
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                />
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
                <Button type='primary' onClick={showModal}>Add New User</Button>
            </div>
            <table className="w-full m-auto border-collapse text-center bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
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
                    {data.filter((e) => e.status.toString().includes(select)).filter((e: any) => e.name.toLowerCase().includes(search.toLowerCase())).map((e: IData) => {
                        return (
                            <tr key={e.id} className="border-t hover:bg-gray-50 transition">
                                <td className="p-4 font-medium">{e.name}</td>
                                <td className="p-4">{e.age}</td>
                                <td className="p-4 text-blue-600">{e.email}</td>
                                <td className="p-4 text-gray-700">{e.phone}</td>
                                <td className="p-4">
                                    {e.status && <p className="text-green-600 font-medium">Active</p>}
                                    {!e.status && <p className="text-red-500 font-medium">InActive</p>}
                                </td>

                                <td className="p-4">
                                    <div className='flex items-center justify-center gap-3'>
                                        <svg onClick={() => deleteUser(e.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                        <svg onClick={() => {
                                            showModalE()
                                            handleEdit(e)
                                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                        <Link to={`/info/${e.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </Link>
                                        <input onClick={() => changeStatus(e.id)} type="checkbox" className='w-3.5 h-3.5' />
                                    </div>
                                </td>
                            </tr>
                        )
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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                    <Input onChange={handleChange} value={values.name} name="name" placeholder="Name" />
                    <Input onChange={handleChange} value={values.age} name='age' placeholder="Age" />
                    <Input onChange={handleChange} value={values.email} name='email' placeholder="Email" />
                    <Input onChange={handleChange} value={values.phone} name='phone' placeholder="Phone" />
                    <button type='submit' className='w-full bg-blue-600 text-white py-1.5 rounded-xl'>Save</button>
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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5' action="">
                    <Input onChange={handleChange} value={values.name} name="name" placeholder="Name" />
                    <Input onChange={handleChange} value={values.age} name='age' placeholder="Age" />
                    <Input onChange={handleChange} value={values.email} name='email' placeholder="Email" />
                    <Input onChange={handleChange} value={values.phone} name='phone' placeholder="Phone" />
                    <button type='submit' className='w-full bg-green-600 text-white py-1.5 rounded-xl'>UbDate</button>
                </form>
            </Modal>
        </div>
    )
}

export default Home

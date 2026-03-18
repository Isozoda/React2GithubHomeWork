import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserRedux, DeleteData, EditReduxData, GetDataRedux } from "../reducers/toDoRedux";
import { Button, Input, Modal, Select } from "antd";
import type { IData } from "./Zustand";
import { useFormik } from "formik";

const Redux = () => {

    const { data } = useSelector((state) => state.counter)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetDataRedux())
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

    const { handleChange, handleSubmit, resetForm, values, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            age: 0,
            email: "",
            phone: "",
        },
        onSubmit: (value) => {
            if (idx) {
                dispatch(EditReduxData({ id: idx, ...value }))
                handleCancelE()
                resetForm()
            } else {
                dispatch(AddUserRedux(value))
                handleCancel(),
                    resetForm()
            }
        }
    })

    const handleEdit = (e: any) => {
        setIdx(e.id)
        setFieldValue("name", e.name)
        setFieldValue("age", e.age)
        setFieldValue("email", e.email)
        setFieldValue("phone", e.phone)
    }
    return (
        <>
            <h1 className='text-4xl font-bold mb-5'>Users Table Redux</h1>
            <div className='flex mt-8 mb-5 items-center justify-between'>
                <Input onChange={(e) => dispatch(GetDataRedux(e.target.value))} style={{ width: "350px" }} placeholder='Search...' />
                <Select
                    onChange={(e) => dispatch(GetDataRedux(e))}
                    showSearch={{
                        filterOption: (input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
                    }}
                    placeholder="Select a person"
                    options={[
                        { value: '', label: 'All' },
                        { value: 'true', label: 'Active' },
                        { value: 'false', label: 'Inactive' },
                    ]}
                />
                <Button onClick={showModal} type='primary'>Add New User</Button>
            </div>
            <table className='text-center w-full mt-10 shadow-2xl rounded-4xl'>
                <thead className='bg-green-800 font-bold text-white'>
                    <tr className=''>
                        <th className='py-4'>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e: IData) => {
                        return <tr className='border-b border-b-gray-100 hover:bg-blue-100' key={e.id}>
                            <td className='py-4 font-bold'>{e.name}</td>
                            <td className='font-semibold'>{e.age}</td>
                            <td className='font-semibold text-blue-700'>{e.email}</td>
                            <td className='font-semibold'>{e.phone}</td>
                            <td>
                                {e.status &&
                                    <p className='text-green-600 font-bold'>Active</p>
                                }
                                {!e.status && <p className='text-red-600 font-bold'>InActive</p>}
                            </td>
                            <td>
                                <div className='flex items-center gap-5 justify-center'>
                                    <svg onClick={() => dispatch(DeleteData(e.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    <svg onClick={() => {
                                        showModalE()
                                        handleEdit(e)
                                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <input checked={e.status} onChange={() => dispatch(EditReduxData({ ...e, status: !e.status }))} type="checkbox" className='w-3.5 h-3.5' />
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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input placeholder='Name' name='name' value={values.name} onChange={handleChange} />
                    <Input placeholder='Age' name='age' value={values.age} onChange={handleChange} />
                    <Input placeholder='Email' name='email' value={values.email} onChange={handleChange} />
                    <Input placeholder='Phone' name='phone' value={values.phone} onChange={handleChange} />
                    <button type='submit' className='bg-blue-500 text-white py-1.5 w-full rounded-xl'>Save</button>
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
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input placeholder='Name' name='name' value={values.name} onChange={handleChange} />
                    <Input placeholder='Age' name='age' value={values.age} onChange={handleChange} />
                    <Input placeholder='Email' name='email' value={values.email} onChange={handleChange} />
                    <Input placeholder='Phone' name='phone' value={values.phone} onChange={handleChange} />
                    <button type='submit' className='bg-blue-500 text-white py-1.5 w-full rounded-xl'>Save</button>
                </form>
            </Modal>
        </>
    )
}

export default Redux

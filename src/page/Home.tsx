import { AddImage, AddUser, apiImage, CheckStatus, DeleteImage, DeleteUser, EditUser, GetData, InfoData } from "@/api/toDoApi"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { IData, IImg } from "@/reducers/toDoRedux"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Input, Modal } from "antd"
import { useForm, Controller } from "react-hook-form"
import { Link } from "react-router"


const Home = () => {
    const { data } = useSelector((store: any) => store.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetData())
    }, [dispatch])

    //State Edit 

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

    //state Add

    const [isModalOpenAddUser, setIsModalOpenAddUser] = useState(false);

    const showModalAddUser = () => {
        setIsModalOpenAddUser(true);
    };

    const handleOkAddUser = () => {
        setIsModalOpenAddUser(false);
    };

    const handleCancelAddUser = () => {
        setIsModalOpenAddUser(false);
    };

    const [idx, setIdx] = useState(null)

    const { control, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            name: "",
            description: "",
            images: []
        },
    })

    const onsubmit = (value: any) => {
        if (idx) {
            dispatch(EditUser({ id: idx, ...value }))
            handleCancel()
            reset()
        } else {
            let formData = new FormData()
            formData.append("name", value.name)
            formData.append("description", value.description)
            for (let i = 0; i < value.images.length; i++) {
                formData.append("images", value.images[i])
            }
            dispatch(AddUser(formData))
            handleCancelAddUser()
            reset()
        }
    }

    const handleEdit = (e: any) => {
        setIdx(e.id)
        setValue("name", e.name)
        setValue("description", e.description)
    }

    const handleUploadImage = (even: any, id: number) => {
        let file = even.target.files[0]
        const formData = new FormData()
        formData.append("images", file)
        dispatch(AddImage({ id, formData }))
    }

    return (
        <div className="w-[80%] m-auto my-3">
            <div className="flex items-center justify-between mb-10">
                <h1 className="font-bold text-4xl text-gray-800">Users List</h1>
                <Button onClick={showModalAddUser}>+ Add New User</Button>
            </div>
            <Table className="text-center">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center font-bold text-xl w-[20%]">Image</TableHead>
                        <TableHead className="text-center font-bold text-xl">Name</TableHead>
                        <TableHead className="text-center font-bold text-xl">Description</TableHead>
                        <TableHead className="text-center font-bold text-xl">Status</TableHead>
                        <TableHead className="text-center font-bold text-xl w-[23%]">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((e: IData) => {
                        return <TableRow key={e.id}>
                            <TableCell>
                                {e.images?.map((img: IImg) => {
                                    return <div key={img.id} className="flex pl-15 items-center gap-5">
                                        <img className="w-12 h-12 border border-blue-500 rounded-full" src={`${apiImage}/${img.imageName}`} alt="" />
                                        <Button variant={"destructive"} onClick={() => dispatch(DeleteImage(img.id))}>❌</Button>
                                    </div>
                                })}
                            </TableCell>
                            <TableCell className="font-semibold">
                                {e.name}
                            </TableCell>
                            <TableCell className="font-semibold text-gray-600">
                                {e.description.slice(0, 20) + "..."}
                            </TableCell>
                            <TableCell className="font-semibold text-gray-600">
                                {e.isCompleted && (
                                    <p className="font-bold text-lg text-green-600">Active</p>
                                )}
                                {!e.isCompleted && (
                                    <p className="font-bold text-lg text-red-600">InActive</p>
                                )}
                            </TableCell>
                            <TableCell className="font-semibold text-gray-600">
                                <div className="flex items-center justify-center gap-3">
                                    <svg onClick={() => dispatch(DeleteUser(e.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    <svg onClick={() => {
                                        showModal()
                                        handleEdit(e)
                                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    <Link to={`/info/${e.id}`}>
                                        <svg onClick={() => dispatch(InfoData(e.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </Link>
                                    <input checked={e.isCompleted} onChange={() => dispatch(CheckStatus(e.id))} type="checkbox" className="w-4 h-4" />
                                    <input onChange={(event) => handleUploadImage(event, e.id)} type="file" className="w-15 border" />
                                </div>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            <Modal
                title="Edit Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input placeholder="Name" {...field} />}
                    />
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <Input placeholder="Description" {...field} />}
                    />
                    <button type="submit" className="bg-blue-500 text-white py-1.5 w-full rounded-xl">Save</button>
                </form>
            </Modal>
            <Modal
                title="Add Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenAddUser}
                onOk={handleOkAddUser}
                onCancel={handleCancelAddUser}
                footer={null}
            >
                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => <Input placeholder="Name" {...field} />}
                    />
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <Input placeholder="Description" {...field} />}
                    />
                    <Controller
                        name="images"
                        control={control}
                        render={({ field }) =>
                            <input type="file" multiple onChange={(e) => field.onChange(e.target.files)} />
                        }
                    />
                    <button type="submit" className="bg-blue-500 text-white py-1.5 w-full rounded-xl">Save</button>
                </form>
            </Modal>
        </div>
    )
}

export default Home

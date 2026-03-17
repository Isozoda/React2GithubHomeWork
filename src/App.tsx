import { useAtom } from "jotai"
import { deleteAtom, loadableAtom, searchAtom, selectAtom, AddNewUser, EditUser } from './atom/ToDoList';
import { useState } from "react";
import { Button, Input, Modal, Select } from "antd"

import { useFormik } from "formik"

const App = () => {
  const [{ data, state }] = useAtom(loadableAtom)
  const [, deleteUser] = useAtom(deleteAtom);
  const [, AddUser] = useAtom(AddNewUser);
  const [, editUser] = useAtom(EditUser);

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

  const [search, setSearch] = useAtom(searchAtom)
  const [select, setSelect] = useAtom(selectAtom)

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

  const { handleChange, setFieldValue, handleSubmit, resetForm, values } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      email: "",
      phone: "",
    },
    onSubmit: (value: any) => {
      if (idx) {
        editUser({ id: idx, ...value })
        handleCancelE(),
          resetForm()
      } else {
        AddUser(value)
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
      <h1 className="w-[80%] m-auto my-5 text-4xl font-bold">
        Users List
      </h1>

      <div className="flex w-[80%] m-auto my-10 items-center justify-between">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "300px" }}
          placeholder="Search..."
        />

        <Select
          value={select}
          onChange={(e) => setSelect(e)}
          style={{ width: "200px" }}
          options={[
            { value: '', label: 'All' },
            { value: 'true', label: 'Active' },
            { value: 'false', label: 'Inactive' },
          ]}
        />

        <Button type="primary" onClick={showModal}>
          Add New User
        </Button>
      </div>

      {state === "hasData" && (
        <>
          <div className="grid grid-cols-3 gap-10 w-[80%] m-auto my-25">
            {data.map((e: any) => {
              return (
                <div key={e.id} className="shadow-2xl text-center rounded-xl p-10">
                  <h1 className="font-bold">{e.name}</h1>
                  <h1>{e.age}</h1>
                  <h1>{e.email}</h1>
                  <h1 className="text-blue-900">{e.phone}</h1>

                  {e.status && (
                    <p className="text-green-600 font-bold mt-3">Active</p>
                  )}
                  {!e.status && (
                    <p className="text-red-600 font-bold mt-3">InActive</p>
                  )}

                  <div className="flex items-center gap-4.5 justify-center">
                    <svg
                      onClick={() => deleteUser(e.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79"
                      />
                    </svg>

                    <svg
                      onClick={() => {
                        showModalE(),
                          handleEdit(e)
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="blue"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07"
                      />
                    </svg>

                    <input onChange={() => editUser({ ...e, status: !e.status })} type="checkbox" className="w-3.5 h-3.5" />
                  </div>
                </div>
              )
            })}
          </div>

          <Modal
            title="Basic Modal"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input placeholder="Name" value={values.name} onChange={handleChange} name="name" />
              <Input placeholder="Age" value={values.age} onChange={handleChange} name="age" />
              <Input placeholder="Email" value={values.email} onChange={handleChange} name="email" />
              <Input placeholder="Phone" value={values.phone} onChange={handleChange} name="phone" />
              <button type="submit" className="bg-blue-600 text-white py-1.5 w-full rounded-xl">Save</button>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input placeholder="Name" value={values.name} onChange={handleChange} name="name" />
              <Input placeholder="Age" value={values.age} onChange={handleChange} name="age" />
              <Input placeholder="Email" value={values.email} onChange={handleChange} name="email" />
              <Input placeholder="Phone" value={values.phone} onChange={handleChange} name="phone" />
              <button type="submit" className="bg-blue-600 text-white py-1.5 w-full rounded-xl">Save</button>
            </form>
          </Modal>
        </>
      )}
    </>
  )
}

export default App
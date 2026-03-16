import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddUser, DeleteData, EditUser, Getdata } from "./reducers/ToDoList"
import { Button, Input, Modal, Select } from "antd"
import { useFormik } from 'formik';

const App = () => {
  const { data } = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Getdata())
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

  const { handleChange, handleSubmit, resetForm, setFieldValue, values } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      email: "",
      phone: "",
      status: false
    },
    onSubmit: (value) => {
      if (idx) {
        dispatch(EditUser({ id: idx, ...value }))
        handleCancelE(),
          resetForm()
        setIdx(null)
      } else {
        dispatch(AddUser(value))
        handleCancel(),
          resetForm()
      }
    }
  })

  const handleEdit = (e: any) => {
    setIdx(e.id)
    setFieldValue("name", e.name)
    setFieldValue("age", e.age)
    setFieldValue("phone", e.phone)
    setFieldValue("email", e.email)
  }

  return (
    <div className="w-[80%] m-auto">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-4xl font-bold">User List</h1>

        <Input
          placeholder="Search..."
          onChange={(e) => dispatch(Getdata(e.target.value))}
          className="w-[200px]"
        />

        <Select
          placeholder="Status"
          onChange={(value) => dispatch(Getdata(value))}
          className="w-[150px]"
          options={[
            { value: "", label: "All" },
            { value: "true", label: "Active" },
            { value: "false", label: "Inactive" },
          ]}
        />

        <Button type="primary" onClick={() => showModal()}>
          Add User
        </Button>

      </div>

      {/* USERS */}

      <div className="grid grid-cols-3 gap-8">

        {data?.map((user: any) => (
          <div
            key={user.id}
            className="shadow-xl p-6 rounded-xl text-center"
          >

            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p>{user.age}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>

            <p
              className={`font-bold my-3 ${user.status ? "text-green-500" : "text-red-500"
                }`}
            >
              {user.status ? "Active" : "Inactive"}
            </p>

            <div className="flex justify-center gap-4">

              <Button danger onClick={() => dispatch(DeleteData(user.id))}>
                Delete
              </Button>

              <Button onClick={() => { handleEdit(user), showModalE() }}>
                Edit
              </Button>

              <input
                type="checkbox"
                checked={user.status}
                onChange={() =>
                  dispatch(EditUser({ ...user, status: !user.status }))
                }
              />

            </div>

          </div>
        ))}

      </div>

      {/* ADD MODAL */}

      <Modal
        title="Add User"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Input name="name" placeholder="Name" value={values.name} onChange={handleChange} />
          <Input name="age" placeholder="Age" value={values.age} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={values.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} />

          <button className="bg-blue-600 text-white py-2 rounded">
            Save
          </button>

        </form>

      </Modal>

      {/* EDIT MODAL */}

      <Modal
        title="Edit User"
        open={isModalOpenE}
        onCancel={() => setIsModalOpenE(false)}
        footer={null}
      >

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <Input name="name" value={values.name} onChange={handleChange} />
          <Input name="age" value={values.age} onChange={handleChange} />
          <Input name="email" value={values.email} onChange={handleChange} />
          <Input name="phone" value={values.phone} onChange={handleChange} />

          <button className="bg-blue-600 text-white py-2 rounded">
            Update
          </button>

        </form>

      </Modal>

    </div>
  );
}

export default App

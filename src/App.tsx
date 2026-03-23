import { useEffect, useState } from "react";
import { ToDoZustand } from "./store/ToDoZustand";
import { Button, Input, Modal, Select } from "antd";
import { useForm } from "react-hook-form";

const App = () => {
  const { data, GetData, DeleteUser, AddNewUser, EditUser, SearchUser, SelectUser }: any = ToDoZustand();

  useEffect(() => {
    GetData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenE, setIsModalOpenE] = useState(false);
  const [idx, setIdx] = useState(null);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const showModalE = () => setIsModalOpenE(true);
  const handleCancelE = () => setIsModalOpenE(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const onsubmit = (value: any) => {
    if (idx) {
      EditUser({ id: idx, ...value });
      handleCancelE();
      reset();
    } else {
      AddNewUser(value);
      handleCancel();
      reset();
    }
  };

  const handleEdit = (e: any) => {
    setIdx(e.id);
    setValue("name", e.name);
    setValue("age", e.age);
    setValue("email", e.email);
    setValue("phone", e.phone);
  };

  return (
    <div className="w-[90%] m-auto my-10">

      <h1 className="font-bold text-4xl my-10 text-center">Users List</h1>

      <div className="flex flex-wrap gap-4 my-10 items-center justify-between">
        <Input
          style={{ width: "300px" }}
          onChange={(e) => SearchUser(e.target.value)}
          placeholder="🔍 Search user..."
        />
        <Select
          onChange={(e) => SelectUser(e)}
          placeholder="Filter status users"
          options={[
            { value: '', label: 'All Users' },
            { value: 'true', label: 'Active Users' },
            { value: 'false', label: 'Inactive Users' },
          ]}
        />
        <Button onClick={showModal} type="primary">
          + Add New User
        </Button>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((e: any) => (
          <div
            key={e.id}
            className="bg-white shadow-xl hover:shadow-2xl transition p-6 rounded-2xl text-center"
          >
            <h1 className="font-bold text-lg">{e.name}</h1>
            <p className="text-gray-500">{e.age}</p>
            <p className="text-gray-500">{e.email}</p>
            <p className="text-gray-500">{e.phone}</p>

            {e.status ? (
              <p className="text-green-500 font-bold mt-2">Active</p>
            ) : (
              <p className="text-red-500 font-bold mt-2">InActive</p>
            )}

            <div className="flex items-center justify-center mt-5 gap-4">
              <svg
                onClick={() => DeleteUser(e.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                className="size-6 cursor-pointer hover:scale-110 transition"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

              <svg
                onClick={() => {
                  showModalE();
                  handleEdit(e);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="blue"
                className="size-6 cursor-pointer hover:scale-110 transition"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>

              <input
                checked={e.status}
                onChange={() => EditUser({ ...e, status: !e.status })}
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <Modal title="Add User" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Name" {...register("name")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Age" {...register("age")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Email" {...register("email")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Phone" {...register("phone")} />
          <button className="bg-blue-500 text-white py-1.5 rounded-xl font-bold">
            Save
          </button>
        </form>
      </Modal>
      <Modal title="Edit User" open={isModalOpenE} onCancel={handleCancelE} footer={null}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Name" {...register("name")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Age" {...register("age")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Email" {...register("email")} />
          <input className="border border-gray-300 outline-blue-500 rounded-xl px-3.5 py-1.5" placeholder="Phone" {...register("phone")} />
          <button className="bg-green-700 text-white py-1.5 rounded-xl font-bold">
            Ubdate
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
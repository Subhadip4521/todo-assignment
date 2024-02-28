import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [todo_name, setTodo_name] = useState("");
  // eslint-disable-next-line
  const [created_for_date, setCreated_for_date] = useState("");
  const [title, setTitle] = useState("");

  const handleEvent = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      todo_name,
      created_for_date,
      task_list: [{ title: title }],
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    };
    await fetch("http://172.178.104.95/main/create", options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    navigate("/");
  };

  return (
    <div>
      <div>
        <form
          className="bg-slate-200 p-5 rounded-2xl my-10 mx-10"
          method="post"
          action="#"
          onSubmit={handleEvent}
        >
          <div className="relative mb-3">
            <div className="">
              <div className="px-4">
                <div className="text-lg">Task Name:</div>
              </div>
              <div className="py-2 px-3">
                <input
                  className="w-full rounded-2xl px-3 py-2 dark:bg-slate-300 dark:placeholder:text-slate-900 dark:text-black"
                  type="text"
                  name="todo_name"
                  value={todo_name}
                  placeholder="Enter task name"
                  autoComplete="off"
                  required
                  autoFocus
                  onChange={(e) => setTodo_name(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="relative mb-3">
            <div className="">
              <div className="px-4">
                <div className="text-lg">Write Task:</div>
              </div>
              <div className="py-2 px-3">
                <input
                  className="w-full rounded-2xl px-3 py-2 dark:bg-slate-300 dark:placeholder:text-slate-900 dark:text-black"
                  name="Title"
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Write task"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              value="send"
              className="bg-blue-900 hover:bg-blue-800 text-white text-xl px-3 py-2 rounded-lg w-full mx-3"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

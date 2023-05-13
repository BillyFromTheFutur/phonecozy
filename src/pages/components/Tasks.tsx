import React, { useState } from "react";
import { LayoutGroup, Reorder } from "framer-motion";
import { motion } from "framer-motion";

interface Item {
  id: number;
  name: string;
}

const Tasks: React.FC = () => {
  const items: Item[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
  ];

  const [list, setList] = useState<Item[]>(items);
  const [task, setTask] = useState<string>("");

  return (
    <div className="h-full w-full overflow-scroll rounded scrollbar-hide">
      <div className="flex h-14 w-full justify-between overflow-hidden rounded py-2">
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          className="block w-[70%] rounded border border-none border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Write some task"
        />

        <motion.button
          onClick={() => {
            if (task != "") {
              setList([...list, { id: list.length + 1, name: task }]);
              setTask("");
            }
          }}
          className="flex w-20
            items-center
            justify-center rounded border-none
            bg-[#A9A18B] px-5 py-2.5 text-center text-sm
            font-medium text-white outline-none
            hover:bg-blue-800"
          whileTap={{ scale: 0.9 }}
        >
          Add
        </motion.button>
      </div>
      <LayoutGroup>
        <Reorder.Group
          values={list}
          onReorder={setList}
          className="mt-0 flex flex-col gap-2 "
          initial={{ borderRadius: 15 }}
        >
          {list.map((item) => (
            <button key={item.id}>
              <Reorder.Item
                className="rounded bg-green-50 p-2"
                key={item.id}
                value={item}
                layout
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                whileDrag={{
                  zIndex: 50,
                  backgroundColor: "red",
                }}
                whileTap={{
                  cursor: "grab",
                }}
              >
                <div className="flex h-full">
                  <p
                    className="flex whitespace-normal break-all bg-blue-700 text-start"
                    style={{ whiteSpace: "break-spaces" }}
                  >
                    {item.name}
                  </p>
                </div>
              </Reorder.Item>
            </button>
          ))}
        </Reorder.Group>
      </LayoutGroup>
    </div>
  );
};

export default Tasks;

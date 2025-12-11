import { useState } from "react";
import { NotebookPen, Trash2, Plus } from "lucide-react";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen pt-36 px-4 text-black">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <NotebookPen size={32} />
          <h1 className="text-4xl font-bold">Todo List</h1>
        </div>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 py-2 border-b-2 border-black focus:outline-none focus:border-black font-semibold text-black"
          />
          <button
            onClick={addTodo}
            className="p-3 bg-black text-white font-bold cursor-pointer rounded-lg flex items-center justify-center"
          >
            <Plus size={20} color="white" />
          </button>
        </div>

        <div className="space-y-2">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-3"
            >
              <span className="flex-1 font-bold">{todo}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="hover:text-red-600 cursor-pointer"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

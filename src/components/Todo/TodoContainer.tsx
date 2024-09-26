import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

export default function TodoContainer() {
  return (
    <div>
      <div>
        <Button>add todo</Button>
        <Button>filter</Button>
      </div>
      <div className="bg-red-500 w-full  rounded-xl p-6 space-y-3">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
          <h1>There is no task pending</h1>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
}
